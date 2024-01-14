'use client'
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

function Page() {
  const [tl, setTl] = useState(null);
  const [pos, setPos] = useState("<0.25");
  const [axis, setAxis] = useState(true);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 2, ease: 'power1.inOut', yoyo: true, repeat: -1 },
    });

    timeline.to('#cr1', { x: 500 });
    timeline.to('#cr2', { x: 461.94, y: -191.64 }, pos);
    timeline.to('#cr3', { x: 353.55, y: -353.56 }, pos);
    timeline.to('#cr4', { x: 191.34, y: -461.94 }, pos);
    timeline.to('#cr5', { y: -500 }, pos);
    timeline.to('#cr6', { x: -191.35, y: -461.94 }, pos);
    timeline.to('#cr7', { x: -353.55, y: -353.56 }, pos);
    timeline.to('#cr8', { x: -461.94, y: -191.34 }, pos);

    setTl(timeline);

     gsap.to('#title', {
      opacity: 1,
      y: 200,
      duration: 2,
      ease: 'elastic'
    })

    return () => {
      timeline.kill();
    };

   
  }, [pos]);

  const handleControlClick = (e) => {
  const controler = e.currentTarget.id;

  if (controler === 'control_absolute') {
    setPos("<0.25");
  } else if (controler === 'control_relative') {
    setPos(">0.25");
  } else if (controler === 'control_lable') {
    setPos("");
  } else if (controler === 'control_axis') {
    setAxis(!axis);
  }

  if (tl) {
    tl.seek(0); 
    tl.play(); 
  }
};

  return (
   <div className='w-full h-[100vh] font-extrabold flex'>
      <div className='relative w-1/2 h-full'>
        <svg
          height='100%'
          width='100%'
          className='absolute top-0 left-0'
        >
       {axis && (
    <g id='lines' stroke='white' className='z-0'>
      <line x1='200' y1='300' x2='700' y2='300' />
      <line x1='450' y1='50' x2='450' y2='550' />
      <line x1='680.97' y1='395.67' x2='219.03' y2='204.03' />
      <line x1='626.78' y1='123.22' x2='273.23' y2='476.78' />
      <line x1='545.67' y1='69.03' x2='354.33' y2='530.97' />
      <line x1='273.23' y1='123.22' x2='626.78' y2='476.78' />
      <line x1='219.03' y1='395.67' x2='680.97' y2='204.03' />
      <line x1='354.32' y1='69.03' x2='545.67' y2='530.97' />
    </g>
  )}

  <g id='circles' className='absolute z-10'>
    <circle id='cr1' cx='200' cy='300' r='24' fill='#C71585'/>
    <circle id='cr2' cx='219.03' cy='395.67' r='24' fill='#DC143C' />
    <circle id='cr3' cx='273.23' cy='476.78' r='24' fill='#66CDAA'/>
    <circle id='cr4' cx='354.33' cy='530.97' r='24' fill='#4682B4'/>
    <circle id='cr5' cx='450' cy='550' r='24' fill='#6495ED'/>
    <circle id='cr6' cx='545.67' cy='530.97' r='24' fill='#191970'/>
    <circle id='cr7' cx='626.78' cy='476.78' r='24' fill='#4B0082'/>
    <circle id='cr8' cx='680.97' cy='395.67' r='24' fill='#DA70D6'/>
  </g>         
        </svg>
      </div>

      <div className='w-[50%] flex flex-col items-center justify-center'>
        <h2 id='title' className='text-3xl text-center absolute top-0  opacity-[0]'>Positioning of animations on the timeline:</h2>

        <div className='flex items-center justify-center gap-4'>
          <button
          id='control_absolute'
          className='bg-white text-black h-max py-2 px-4 rounded hover:bg-yellow-400 transition-all'
          onClick={handleControlClick}
        >
          absolute
        </button>

        <button
          id='control_relative'
          className='bg-white text-black h-max py-2 px-4 rounded hover:bg-yellow-400 transition-all'
          onClick={handleControlClick}
        >
          relative
        </button>

        <button
          id='control_lable'
          className='bg-white text-black h-max py-2 px-4 rounded hover:bg-yellow-400 transition-all'
          onClick={handleControlClick}
        >
          lable
        </button>

        <button
          id='control_axis'
          className='bg-white text-black h-max py-2 px-4 rounded hover:bg-yellow-400 transition-all'
          onClick={handleControlClick}
        >
          Axis
        </button>
        </div>
      </div>
    </div>
  );
}

export default Page;