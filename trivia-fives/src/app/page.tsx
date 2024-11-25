'use client'

import React, { useEffect, useState } from 'react';
import TriviaBox from '@/components/trivia-box';

export default function Home() {

    const hints = [
        {
            hintText: "Point Guard",
            isShown: true
        },
        {
          hintText: "Number 10 high school recruit in the nation in 2012",
          isShown: false
        },
        {
            hintText: "Drafted by the Boston Celtics",
            isShown: false
        },
        {
          hintText: "2021-22 Defensive Player of the year",
          isShown: false
        },
        {
          hintText: "Traded to the Grizzles in 2023",
          isShown: false
        }
      ];

  return (
    <main className="p-10 w-full">
      <TriviaBox propHints={hints} sportName='Basketball' answer='Marcus Smart'/>
    </main>
  );
}