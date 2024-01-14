'use client'

import React, { useEffect } from 'react';
import gsap from 'gsap';

const colors = ['white', 'black']; // Добавьте свои цвета

const Circle = ({ id, positionX, positionY, radius, fill }) => {
  useEffect(() => {
    const svgContainer = document.getElementById('svgContainer');
    svgContainer.innerHTML += `<circle id="${id}" 
      cx="${positionX}" cy="${positionY}" 
      r="${radius}" fill="${fill}" />`;

    return () => {
      const circleToRemove = document.getElementById(id);
      if (circleToRemove) {
        circleToRemove.remove();
      }
    };
  }, [id, positionX, positionY, radius, fill]);

  return null;
};

const Page = () => {
  const figureAssembly = () => {
    let x = 600,
      y = 300;
    for (let j = 0; j < 40; j++) {
      gsap.to(`#cr${j}`, {
        duration: 0.5,
        x: 0,
        y: 0,
        ease: 'power1.out',
        stagger: 0.05,
      });
    }
  };

  useEffect(() => {
    figureAssembly();
    window.addEventListener('mousemove', function (e) {
      gsap.to('circle', {
        duration: 0.5,
        x: e.pageX - 600,
        y: e.pageY - 300,
        ease: 'power1.out',
        stagger: 0.05,
      });
    }, false);

    return () => {
      window.removeEventListener('mousemove', function (e) {
        gsap.to('circle', {
          duration: 0.5,
          x: e.pageX - 600,
          y: e.pageY - 300,
          ease: 'power1.out',
          stagger: 0.05,
        });
      }, false);
    };
  }, []);

  return (
    <svg id="svgContainer" className='fixed top-0 left-0 w-full h-full'>
      {[...Array(40)].map((_, index) => (
        <Circle
          key={index}
          id={`cr${index}`}
          positionX={600}
          positionY={300}
          radius={200 - 5 * index}
          fill={colors[index % colors.length]}
        />
      ))}
    </svg>
  );
};

export default Page;