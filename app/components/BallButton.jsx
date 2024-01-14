'use client'
import React from 'react';
import { gsap, Power4, Elastic } from 'gsap';
import Link from 'next/link';

function BallButton({ link, title }) {
  const activateMagneto = (event) => {
    const magneto = event.currentTarget;
    const magnetoText = magneto.querySelector('.text');

    let boundBox = magneto.getBoundingClientRect();
    const magnetoStrength = 40;
    const magnetoTextStrength = 80;
    const newX = (event.clientX - boundBox.left) / magneto.offsetWidth - 0.5;
    const newY = (event.clientY - boundBox.top) / magneto.offsetHeight - 0.5;

    gsap.to(magneto, {
      duration: 1,
      x: newX * magnetoStrength,
      y: newY * magnetoStrength,
      ease: Power4.easeOut,
    });

    gsap.to(magnetoText, {
      duration: 1,
      x: newX * magnetoTextStrength,
      y: newY * magnetoTextStrength,
      ease: Power4.easeOut,
    });
  };

  const resetMagneto = (event) => {
    const magneto = event.currentTarget;
    const magnetoText = magneto.querySelector('.text');

    gsap.to(magneto, {
      duration: 1,
      x: 0,
      y: 0,
      ease: Elastic.easeOut,
    });

    gsap.to(magnetoText, {
      duration: 1,
      x: 0,
      y: 0,
      ease: Elastic.easeOut,
    });
  };

  return (
      <Link className="magneto" href={link} onMouseMove={activateMagneto} onMouseLeave={resetMagneto}>
          <span className="text text-xl">{title}</span>
    </Link>
  );
}

export default BallButton;