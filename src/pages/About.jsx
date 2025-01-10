import React from 'react'
import HeroSection from '../components/about/HeroSection'
import MissionVision from '../components/about/MissionVision'
import AboutUsSection from '../components/about/AboutUsSection'
import AuthorityOfSLeSCA from '../components/about/AuthorityOfSLeSCA'
import KeyFunctions from '../components/about/KeyFunctions'
import AchievementsAndImpact from '../components/about/AchievementsAndImpact'


const About = () => {
  return (
    <>

    <div className='bg-gradient-to-b from-blue-50 to-green-200 w-screen h-full flex justify-center items-center flex-col'>
          <HeroSection/>
        <div className=' w-full py-14 flex flex-col justify-center
          items-center mt-5 mb-10'
        >
          <MissionVision/>
          <AboutUsSection/>
          <AuthorityOfSLeSCA/>
        </div>
      </div>

      <KeyFunctions/>
      <AchievementsAndImpact/>


    </>
  )
}

export default About
