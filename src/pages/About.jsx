import React from 'react'
import HeroSection from '../components/about/HeroSection'
import MissionVision from '../components/about/MissionVision'
import AboutUsSection from '../components/about/AboutUsSection'
import AuthorityOfSLeSCA from '../components/about/AuthorityOfSLeSCA'
import KeyFunctions from '../components/about/KeyFunctions'
import AchievementsAndImpact from '../components/about/AchievementsAndImpact'
import CallToAction from '../components/home/CallToAction'
import WhySLeSCAMatters from '../components/about/WhySLeSCAMatters'
import LeadershipAndTeam from '../components/about/LeadershipAndTeam'
import TestimonialsSection from '../components/about/TestimonialsSection'
import { TimelineSection } from '../components/about/Timeline'


const About = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-blue-50 to-green-200 w-full h-full flex justify-center items-center flex-col'>
          <HeroSection/>
        <div className='w-full py-14 flex flex-col justify-center
          items-center mt-5 mb-10'
        >
          <MissionVision/>
          <AboutUsSection/>
          <AuthorityOfSLeSCA/>
        </div>
      </div>

      <KeyFunctions/>
      <AchievementsAndImpact/>
      <CallToAction/>
      <WhySLeSCAMatters/>
      <TimelineSection/>
      <LeadershipAndTeam/>
      <TestimonialsSection/>
    </>
  )
}

export default About
