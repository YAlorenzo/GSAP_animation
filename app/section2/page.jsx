'use client'
import React from 'react'
import ScrambleText from '../components/ScrambleText'
import BallButton from '../components/BallButton'
import { animationNavInSection2 } from '@/constants'

function page() {
  return (
    <>
      <ScrambleText text="GSAP capabilities in depth" section="Section 2"/>
       <div className='mx-auto mt-20 max-w-[40%] flex gap-7 flex-wrap items-center justify-center'>
      {animationNavInSection2.map((elem) => (
        <BallButton link={elem.link} title={elem.title}  />
      ))}
    </div>
    </>
  )
}

export default page