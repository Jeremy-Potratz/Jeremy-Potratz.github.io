'use client'

import React, { useEffect, useState } from 'react';
import TriviaBox from '@/components/trivia-box';


export default function Home() {

    const hints = [
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
      ];

  return (
    <main className="p-10 w-full">
      <TriviaBox propHints={hints} sportName='Football' answer='Jay Cutler'/>
    </main>
  );
}