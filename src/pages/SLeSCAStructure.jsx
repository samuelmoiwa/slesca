import React from 'react'
import HeroSection from '../components/about/SLeSCAStructure/HeroSection'
import SLeSCAStructureComponent from '../components/about/SLeSCAStructure/SLeSCAStructureComponent'
import Organogram from '../components/about/Organogram'
import SeedIndustry from '../components/about/SLeSCAStructure/SeedIndustry'
const SLeSCAStructure = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-blue-50 to-green-200 w-full h-full flex justify-center items-center flex-col'>
          <HeroSection/>
        <div className=' w-full py-14 flex flex-col justify-center
          items-center mt-5 mb-10'
        >
          <SLeSCAStructureComponent/>
        </div>
      </div>
      <Organogram/>
      <SeedIndustry/>
    </>
  )
}

export default SLeSCAStructure
