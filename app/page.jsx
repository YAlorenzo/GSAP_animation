'use client'
import { animationShowList } from "@/constants";
import { gsap } from "gsap";
import Link from "next/link";
import { useEffect } from "react";
export default function Home() {

   useEffect(() => {
    gsap.to('#left', {
      x: 850,
      duration: 2,
      delay: 0.5,
      ease: "elastic",
    });
    gsap.to('#right', {
      x: -800,
      duration: 2,
      delay: 2,
      ease: "elastic",
    });
    gsap.to('#letter', {
      rotation: 360,
      duration: 1,
      delay: 4,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <main className="flex min-h-screen flex-wrap overflow-x-hidden p-24">
    

      <div className="relative w-full">
         <div id='left' className="absolute -left-[350px]">
          <h1 className='text-[80px] font-bold'>GSA<span id='letter' className="ml-0 inline-block">P</span></h1>
        </div>

         <div id='right' className="absolute -right-[400px] top-[100px]">
          <h1 className='text-[60px] font-bold'>Animation</h1>
        </div>
      </div>
       
       
      <div className="mb-32 text-center lg:max-w-5xl  flex gap-5  mx-auto justify-center mt-10 lg:w-full lg:mb-0 lg:text-left">
        {animationShowList.map((elem) => (
           <Link
            href={elem.link}
            id={elem.id}
            className="group rounded-lg border border-transparent px-5 py-4 h-max transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
              {elem.title} <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
               -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          {elem.description}
          </p>
        </Link>
        ))}
      </div>
    </main>
  )
}
