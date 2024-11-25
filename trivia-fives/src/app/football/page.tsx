'use client'

import React, { useEffect, useState } from 'react';
import TriviaBox from '@/components/trivia-box';


export default function Home() {

    const hints = [
        {
            hintText: "Defensive Lineman",
            isShown: true
        },
        {
            hintText: "Career best for sacks in a season is 14",
            isShown: false
        },
        {
            hintText: "Won Big 10 Linebacker of the year in college",
            isShown: false
        },
        {
            hintText: "Made 3 Pro Bowls from 2021-2023",
            isShown: false
        },
        {
            hintText: "Currently plays for the Dallas Cowboys",
            isShown: false
        }
      ];

  return (
    <main className="p-10 w-full">
      <TriviaBox propHints={hints} sportName='Football' answer='Micah Parsons'/>
    </main>
  );
}