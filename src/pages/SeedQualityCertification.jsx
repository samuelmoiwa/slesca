import React from 'react'
import HeroSection from '../components/services/SeedQualityCertification/HeroSection'
import SeedQuality from '../components/services/SeedQualityCertification/SeedQuality'

const SeedQualityCertification = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-blue-50 to-green-200 w-full h-full flex justify-center items-center flex-col'>
          <HeroSection/>
        <div className=' w-full py-14 flex flex-col justify-center
          items-center mt-5 mb-10'
        >
          <SeedQuality/>
        </div>
      </div>
    </>
  )
}

export default SeedQualityCertification
