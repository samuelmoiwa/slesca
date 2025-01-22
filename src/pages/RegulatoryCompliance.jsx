import React from 'react'
import HeroSection from '../components/services/RegulatoryCompliance/HeroSection'
import RegulatoryComplianceComponent from '../components/services/RegulatoryCompliance/RegulatoryComplianceComponent'

const RegulatoryCompliance = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-blue-50 to-green-200 w-full h-full flex justify-center items-center flex-col'>
          <HeroSection/>
        <div className=' w-full py-14 flex flex-col justify-center
          items-center mt-5 mb-10'
        >
          <RegulatoryComplianceComponent/>
        </div>
      </div>
    </>
  )
}

export default RegulatoryCompliance
