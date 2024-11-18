'use client'

import React, { useEffect, useState } from 'react';
import TriviaBox from '@/components/trivia-box';


export default function Home() {

    const hints = [
        {
            hintText: "American",
            isShown: true
        },
        {
            hintText: "Won Wimbledon once",
            isShown: false
        },
        {
            hintText: "Beat Todd Martin to win the 1999 US Open",
            isShown: false
        },
        {
            hintText: "Won Gold at the 1996 Olympics",
            isShown: false
        },
        {
            hintText: "First and last name begin with the same letter",
            isShown: false
        }
      ];

  return (
    <main className="p-10 w-full">
      <TriviaBox propHints={hints} sportName='Tennis' answer='Andre Agassi'/>
    </main>
  );
}