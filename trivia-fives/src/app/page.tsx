'use client'

import React, { useEffect, useState } from 'react';
import TriviaBox from '@/components/trivia-box';

export default function Home() {

    const hints = [
        {
            hintText: "Guard",
            isShown: true
        },
        {
          hintText: "Made 1172 3's in his NBA Career",
          isShown: false
        },
        {
            hintText: "Drafted out of Kansas in 2003",
            isShown: false
        },
        {
          hintText: "4th in RoTY voting in 2003-04",
          isShown: false
        },
        {
          hintText: "Played for the Bulls, Wizards, and Hawks",
          isShown: false
        }
      ];

  return (
    <main className="p-10 w-full">
      <TriviaBox propHints={hints} sportName='Basketball' answer='Kirk Hinrich'/>
    </main>
  );
}