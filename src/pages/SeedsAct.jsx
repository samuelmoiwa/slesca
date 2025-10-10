import React from 'react'
// import HeroSection from '../components/about/seedsAct/HeroSection'
import HeroSection from "../components/common/HeroSection";
import SeedsActComponent from '../components/about/seedsAct/SeedsActComponent'
const SeedsAct = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-blue-50 to-green-200 w-full h-full flex justify-center items-center flex-col'>
          <HeroSection title="Seeds Act" breadcrumb="Home . Seeds Act"/>
        <div className=' w-full py-14 flex flex-col justify-center
          items-center mt-5 mb-10'
        >
          <SeedsActComponent/>
        </div>
      </div>
    </>
  )
}

export default SeedsAct
