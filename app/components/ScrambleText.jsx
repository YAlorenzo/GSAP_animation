'use client'
// Import the ScrambleTextPlugin from gsap
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import React, { useEffect } from 'react';




gsap.registerPlugin(TextPlugin);

function ScrambleText({ text, section}) {
    
    useEffect(() => {
    gsap.to('#text', {
        duration: 2,
        delay: 1,
      text: {
          value: text + '!',
          ease: 'ease.in',  
        },
    });
  }, []);

  return (
      <h1 id='text' className='text-center text-[80px] text-white mt-10'>
      {section}
    </h1>
  );
}

export default ScrambleText;
