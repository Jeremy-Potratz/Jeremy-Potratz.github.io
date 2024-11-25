'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import logo from '../components/assets/thumbsUp.gif';

const formSchema = z.object({
  playerGuess: z.string(),
})

interface Hint {
    hintText: String;
    isShown: boolean;
}

interface TriviaBoxProps {
    propHints : Hint[],
    sportName : string,
    answer : string,
}

export default function TriviaBox(props : TriviaBoxProps) {

 const answer = props.answer;

 const[numGuesses, setnumGuesses] = useState(0);
 const[doneGuessing, setDoneGuessing] = useState(false);
 const[guessingLabel, setguessingLabel] = useState("");
 const[gotTheAnswer, setGotTheAnswer] = useState<boolean>();

 const[guesses, setGuesses] = useState<String[]>([]);
 const[hints, setHints] = useState<Hint[]>(props.propHints);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      playerGuess: "",
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    setnumGuesses(numGuesses + 1);
    console.log(numGuesses);
    if(values.playerGuess.toLowerCase() == answer.toLowerCase()){
      setguessingLabel("You got the answer correct, go send it in slack");
      setGotTheAnswer(true);
    }else{
      //guess is wrong, check what hint to show
      for(var i = 0; i < hints.length; i++)
      {
        if(!hints[i].isShown) {
          hints[i].isShown = true;
          setHints(hints);

          guesses.push(values.playerGuess);
          setGuesses(guesses);

          form.reset();
          return;
        } else if (hints[i].isShown && i == 4){
          // last possible guess, they be done

          guesses.push(values.playerGuess);
          setGuesses(guesses);

          form.reset();
          setGotTheAnswer(false);
          setguessingLabel("Try again tomorrow, the answer was " + props.answer);
          setDoneGuessing(true);
        }
      }
    }
  }

  function copyToClipboard() {
    console.log(numGuesses);

    if(gotTheAnswer){
      let copyText = "I solved the " + props.sportName + " trivia in " + numGuesses + (numGuesses == 1 ? " guess" : " guesses");

      navigator.clipboard.writeText(copyText);
    } else {
      navigator.clipboard.writeText("I didn't get the answer right for " + props.sportName + " trivia :(");
    }
  }


  return (
    <main className="w-full">
      <h1 className="text-3xl font-bold text-foreground">{props.sportName} Trivia in 5</h1>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Make a guess off the clues given</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">

            {hints.map((hint, i) => (
                <div className="columns-1" key={i.toString()}>
                  <div>
                    <small className="w-full">Hint # {i + 1}</small>
                  </div>
                    <label hidden={!hint.isShown}>{hint.hintText}</label>
                    <label hidden={hint.isShown}>?????</label>
                </div>
            ))}
            <img hidden={!gotTheAnswer} src={logo.src} alt="loading..." />
            <div hidden={!gotTheAnswer && !doneGuessing}>
              <Button onClick={copyToClipboard}>Copy My Stats</Button>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="playerGuess"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={ gotTheAnswer != null ? ( gotTheAnswer ? "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300" : "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300") : ""}>{guessingLabel}</FormLabel>
                      <FormControl>
                        <Input placeholder="Guess an athlete" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={doneGuessing}>Guess</Button>
              </form>
            </Form>
            <div className="pt-25">
                <label className="">Past Guesses</label>
            </div>
            {guesses.map((formerGuess, i) => (
                <div className="columns-1 p-0 m-0" key={i.toString()}>
                    <small className="p-0 m-0 line-through">{formerGuess}</small>
                </div>
            ))}
        </CardContent>
      </Card>
    </main>
  );
}