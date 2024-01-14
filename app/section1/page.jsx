import React from 'react'
import BallButton from '../components/BallButton'
import { animationNavInSection1 } from '@/constants'
import ScrambleText from '../components/ScrambleText'


function page() {
  return (
    <>
      <ScrambleText text="Basic GSAP concepts" section="Section 1"/>
       <div className='mx-auto mt-20 max-w-[40%] flex gap-7 flex-wrap items-center justify-center'>
      {animationNavInSection1.map((elem) => (
        <BallButton link={elem.link} title={elem.title}  />
      ))}
    </div>
    </>
  )
}

export default page