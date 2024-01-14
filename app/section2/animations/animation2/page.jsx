'use client'

import React, { useEffect } from 'react';
import gsap from 'gsap';

function Page() {
  const quantnodes = 55;
  const surfWidth = 700;
  const surfHeight = 500;
  const nodesDistance = surfHeight / Math.sqrt(quantnodes / (surfWidth / surfHeight));
  const quantColumn = Math.floor(surfWidth / nodesDistance);
  const quantRow = Math.floor(surfHeight / nodesDistance);
  const squareSize = 30;

  let i = 0;
  let idSquares = '';
  let L;
  let L1 = Math.sqrt(Math.pow(surfWidth, 2) + Math.pow(surfHeight, 2));
  let scalingFactor = 1;
  let angle = 0;

  useEffect(() => {
    function getRandomFloat(min, max) {
      return Math.random() * (max - min) + min;
    }

    function randColor() {
      let r = Math.floor(getRandomFloat(0.2, 1) * 256),
        g = Math.floor(getRandomFloat(0.2, 1) * 256),
        b = Math.floor(getRandomFloat(0.2, 1) * 256);
      return `rgb(${r}, ${g}, ${b})`;
    }

    function surfaceBuilding() {
      document.getElementById("SVGcontainer").innerHTML = "";

    for (let j = 1; j < quantRow; j++) {
  for (let k = 1; k < quantColumn; k++) {
         
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("id", `k${i}`);
    rect.setAttribute("x", (k - 1) * nodesDistance); // Изменено
    rect.setAttribute("y", (j - 1) * nodesDistance); // Изменено
    rect.setAttribute("width", squareSize);
    rect.setAttribute("height", squareSize);
    rect.setAttribute("fill", randColor());
    document.getElementById("SVGcontainer").appendChild(rect);

          if ((k === quantColumn - 1) && (j === quantRow - 1)) {
            idSquares = idSquares + "#" + "k" + i;
          } else {
            idSquares = idSquares + "#" + "k" + i + ",";
          }
        }
      }
    }
    surfaceBuilding();

    const mouseMoveHandler = (e) => {
      L = Math.sqrt(Math.pow((surfWidth - e.pageX), 2) + Math.pow((surfHeight - e.pageY), 2));
      scalingFactor = L / L1 * 2;

      gsap.set(idSquares, { transformOrigin: "50% 50%" });
      gsap.to(idSquares, {
        duration: 4,
        rotation: angle,
        x: e.pageX - (surfWidth / 2),
        y: e.pageY - (surfHeight / 2),
        width: squareSize * scalingFactor,
        height: squareSize * scalingFactor,
        ease: "elastic.out(1, 0.3)",
        stagger: 0.05
      });
      angle = angle + 10;
    };

    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, [surfWidth, surfHeight, quantRow, quantColumn, nodesDistance]);

  return (
    <div className="w-full h-[100vh]">
      <svg id="SVGcontainer" height="100%" width="100%"></svg>
    </div>
  );
}

export default Page;