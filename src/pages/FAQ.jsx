import React from 'react'
import HeroSection from '../components/faq/HeroSection'
import FAQComponent from '../components/faq/FAQComponent'
import MostRecentActivities from '../components/faq/MostRecentActivities'
import GetSupportFromExperts from '../components/faq/GetSupportFromExperts'

const FAQ = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-blue-50 to-green-200 w-screen h-full flex justify-center items-center flex-col'>
          <HeroSection/>
        <div className=' w-full py-14 flex flex-col justify-center
          items-center mt-5 mb-10'
        >
          <FAQComponent/>
          <MostRecentActivities/>
          <GetSupportFromExperts/>
        </div>
      </div>
    </>
  )
}

export default FAQ
