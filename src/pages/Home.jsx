import React from 'react'
import HeroSection from '../components/home/HeroSection'
import MissionVision from '../components/home/MissionVision'
import AboutNote from '../components/home/AboutNote'
import KeyFunctions from '../components/home/KeyFunctions'
import StatisticsImpact from '../components/home/StatisticsImpact'
import RecentProjects from '../components/home/RecentProjects'
import GetInvolved from '../components/home/GetInvolved'
import Testimonials from '../components/home/Testimonials'
import CallToAction from '../components/home/CallToAction'

const Home = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-blue-50 to-green-200 w-screen h-full flex
        justify-center items-center flex-col'
      >
          <HeroSection/>
        <div className=' w-full py-14 flex flex-col justify-center
          items-center mt-5 mb-10'
        >
          <MissionVision/>
          <AboutNote/>
        </div>
      </div>

      <>
        <GetInvolved/>
      </>

      <>
        <KeyFunctions/>
      </>

      <StatisticsImpact/>
      <RecentProjects/>

      <CallToAction/>

      <Testimonials/>

    </>
  )
}

export default Home
