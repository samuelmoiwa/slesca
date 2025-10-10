import React from 'react'
// import HeroSection from '../components/about/renewalSeedLicense/HeroSection'
import HeroSection from "../components/common/HeroSection";
import RenewalSeedLicense from '../components/about/renewalSeedLicense/RenewalSeedLicense'

const RenewalOfSeedLicense = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-blue-50 to-green-200 w-full h-full flex justify-center items-center flex-col'>
          <HeroSection title="Renewal of Seed License"/>
        <div className=' w-full py-14 flex flex-col justify-center
          items-center mt-5 mb-10'
        >
          <RenewalSeedLicense/>
        </div>
      </div>
    </>
  )
}

export default RenewalOfSeedLicense
