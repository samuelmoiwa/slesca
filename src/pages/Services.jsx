import React from 'react'
import HeroSection from '../components/common/HeroSection'
import OurServices from '../components/services/OurServices'

const Services = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-blue-50 to-green-200 w-full h-full flex justify-center items-center flex-col'>
          <HeroSection title="Services" breadcrumb="Home . Services"/>
        <div className=' w-full py-14 flex flex-col justify-center
          items-center mt-5 mb-10'
        >
          <OurServices/>
        </div>
      </div>
    </>
  )
}

export default Services
