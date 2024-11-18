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


export default function Home() {

 interface Hint {
    hintText: String;
    isShown: boolean;
 }
 const[doneGuessing, setDoneGuessing] = useState(false);
 const[guessingLabel, setguessingLabel] = useState("Make a guess");
 const[gotTheAnswer, setGotTheAnswer] = useState(false);


 const[hints, setHints] = useState<Hint[]>([
  {
      hintText: "Quarterback",
      isShown: true
  },
  {
      hintText: "Played for Vanderbilt",
      isShown: false
  },
  {
      hintText: "Drafted in 2006",
      isShown: false
  },
  {
      hintText: "Played for the Denver Broncos",
      isShown: false
  },
  {
      hintText: "Chicago Bears all-time leader in passing yards",
      isShown: false
  }
]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      playerGuess: "",
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    if(values.playerGuess == answer){
      setguessingLabel("You got it! Great Job!");
      setGotTheAnswer(true);
    }else{
      //guess is wrong, check what hint to show
      for(var i = 0; i < hints.length; i++)
      {
        if(!hints[i].isShown) {
          hints[i].isShown = true;
          setHints(hints);
          form.reset();
          return;
        } else if (hints[i].isShown && i == 4){
          // last possible guess, they be done
          form.reset();
          setguessingLabel("Try again tomorrow :(");
          setDoneGuessing(true);
        }
      }
    }
  }

  const guesses = [];
  const answer = "Jay Cutler";

  return (
    <main className="p-10 w-full">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Trivia in 5</h1>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Make a guess off the clues given</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">

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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="playerGuess"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{guessingLabel}</FormLabel>
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

        </CardContent>
      </Card>
    </main>
  );
}