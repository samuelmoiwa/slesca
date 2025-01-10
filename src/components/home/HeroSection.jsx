import React from 'react'
import { BackgroundGradientAnimation } from '../ui/background-gradient-animation'
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

const HeroSection = () => {
  return (









    <BackgroundBeamsWithCollision>
      <div className='w-full flex flex-col justify-center items-center px-2'>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white font-sans tracking-tight max-w-[60rem]">
          Welcome to Sierra Leone Seed Certification Agency (SLeSCA){" "}
          <div className="mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4
            from-orange-500 via-violet-500 to-blue-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className=""></span>
            </div>

          </div>
        </h2>

        <div className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4
          from-orange-500 via-violet-500 to-blue-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
          <p className=" text-center sm:text-3xl">
            Ensuring high-quality seeds and fostering growth for Sierra Leone's food security.
          </p>
        </div>
      </div>
    </BackgroundBeamsWithCollision>

  )
}

export default HeroSection
