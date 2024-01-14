'use client'
import React, { useEffect } from 'react';
import gsap from 'gsap';

const Page = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.set("#text", {
        textShadow: 
          (-(e.pageX-window.innerWidth/2)/60) + "px "+(-(e.pageY-window.innerHeight/2)/60) + "px 2px  #FFF0F5, " +
          (-(e.pageX-window.innerWidth/2)/50) + "px "+(-(e.pageY-window.innerHeight/2)/50) + "px 30px #F400A1"
      });
      
      console.log((-(e.pageX-window.innerWidth/2)/60) + "px "+(-(e.pageY-window.innerHeight/2)/60) + "px 2px white, " +
          (-(e.pageX-window.innerWidth/2)/50) + "px "+(-(e.pageY-window.innerHeight/2)/50) + "px 30px yellow");
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <p id="text" className='text-black text-[300px] uppercase text-center'>
       NEXT
      </p>
    </div>
  );
};

export default Page;