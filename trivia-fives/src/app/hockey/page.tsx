'use client'

import React, { useEffect, useState } from 'react';
import TriviaBox from '@/components/trivia-box';


export default function Home() {

    const hints = [
        {
            hintText: "Canadian",
            isShown: true
        },
        {
            hintText: "Drafted in 2006",
            isShown: false
        },
        {
            hintText: "Played Center",
            isShown: false
        },
        {
            hintText: "One of the few members of the Triple Gold Club (Won Stanley Cup, Olympic Gold, and World Championchip Gold Metal)",
            isShown: false
        },
        {
            hintText: "Won 3 Stanley Cups with the Chicago Blackhawks",
            isShown: false
        }
      ];

  return (
    <main className="p-10 w-full">
      <TriviaBox propHints={hints} sportName='Hockey' answer='Jonathan Toews'/>
    </main>
  );
}