import React from 'react'
import ScrambleText from '../components/ScrambleText'
import BallButton from '../components/BallButton'
import { animationNavInSection3 } from '@/constants'

function page() {
  return (
    <>
      <ScrambleText text="GSAP core Plugins" section="Section 3"/>
       <div className='mx-auto mt-20 max-w-[40%] flex gap-7 flex-wrap items-center justify-center'>
      {animationNavInSection3.map((elem) => (
        <BallButton link={elem.link} title={elem.title}  />
      ))}
    </div>
    </>
  )
}

export default page