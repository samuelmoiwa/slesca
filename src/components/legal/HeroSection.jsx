import React from 'react'
import { BackgroundGradientAnimation } from '../ui/background-gradient-animation'

const HeroSection = () => {
  return (
    <BackgroundGradientAnimation>
    <div className="absolute z-40 inset-0 flex flex-col items-center justify-center
      text-white font-bold px-4 pointer-events-none text-2xl">
      <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80
        to-white/20 max-w-[90rem] text-lg text-center md:text-xl lg:text-5xl mt-[5rem]">
        LEGAL
        <br/>
        <span className='text-lg text-white'> Home . Legal</span>
      </p>
    </div>
</BackgroundGradientAnimation>

  )
}

export default HeroSection
