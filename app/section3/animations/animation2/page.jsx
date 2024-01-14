'use client'

import React, { useEffect } from 'react';
import gsap from 'gsap';

const page = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.set("#im2", {
        filter: "hue-rotate(" + (e.pageX / window.innerWidth * 100 * 10) + "deg)"
      });
      gsap.set("#im4", {
        filter: "opacity(" + (e.pageX / window.innerWidth * 100) + "%)" +
          "blur(" + (window.innerWidth - e.pageX) / 50 + "px)"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
        <svg id="SVGcontainer" className='fixed w-full h-full flex justify-center items-center'>
      <image xlinkHref="https://github.com/avturin1980/GSAP/blob/main/C4L7/background.png?raw=true" x="20%" y="20%" width="35%" />
      <image id="im2" xlinkHref="https://github.com/avturin1980/GSAP/blob/main/C4L7/im.png?raw=true" x="20%" y="20%" width="35%" />

      <image xlinkHref="https://github.com/avturin1980/GSAP/blob/main/C4L7/background.png?raw=true" x="67%" y="43%" width="35%" />
      <image id="im4" xlinkHref="https://github.com/avturin1980/GSAP/blob/main/C4L7/im.png?raw=true" x="67%" y="43%" width="35%" />
    </svg>
  );
};

export default page;