import React from 'react'
import HeroSection from '../components/advocacyCollaboration/HeroSection'
import AdvocacyAndCollaboration from '../components/advocacyCollaboration/AdvocacyAndCollaboration'
import RecentProjects from '../components/home/RecentProjects'

const AdvocacyCollaboration = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-blue-50 to-green-200 w-full h-full flex justify-center items-center flex-col'>
          <HeroSection/>
        <div className=' w-full py-14 flex flex-col justify-center
          items-center mt-5 mb-10'
        >
          <AdvocacyAndCollaboration/>
        </div>
      </div>
      <RecentProjects/>
    </>
  )
}

export default AdvocacyCollaboration
