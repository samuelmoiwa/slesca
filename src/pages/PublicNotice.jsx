import React from 'react'
import HeroSection from '../components/publicNotice/HeroSection'
import Notice from '../components/publicNotice/Notice'

const PublicNotice = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-blue-50 to-green-200 w-full h-full flex justify-center items-center flex-col'>
          <HeroSection/>
        <div className=' w-full py-14 flex flex-col justify-center
          items-center mt-5 mb-10'
        >
          <Notice/>
        </div>
      </div>
    </>
  )
}

export default PublicNotice
