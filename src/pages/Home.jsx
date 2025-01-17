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
import Banner from '../components/home/Banner'

const Home = () => {
  return (
    <>
      <div className='w-full bg-gradient-to-b from-blue-50 to-green-200 h-full flex
        justify-center items-center flex-col'
      >
          <Banner/>
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
