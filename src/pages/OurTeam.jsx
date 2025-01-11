import React from 'react'
import HeroSection from '../components/team/HeroSection'
import BoardOfDirectors from '../components/team/BoardOfDirectors'
import ManagementTeam from '../components/team/ManagementTeam'
import RestOfTeam from '../components/team/RestOfTeam'
import CallToAction from '../components/home/CallToAction'

const OurTeam = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-blue-50 to-green-200 w-screen h-full flex justify-center items-center flex-col'>
          <HeroSection/>
        <div className=' w-full py-14 flex flex-col justify-center
          items-center mt-5 mb-10'
        >
          <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          {/* Introductory Section */}
            <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-green-800">
                Meet the Team Behind SLeSCA
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Our dedicated team at Sierra Leone Seed Certification Agency (SLeSCA)
              is committed to transforming agriculture in Sierra Leone. From
              strategic leadership provided by our Board of Directors to the
              operational excellence of our Management Team, every individual plays
              a pivotal role in ensuring seed quality and compliance, fostering
              sustainable development, and empowering farmers.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col justify-center'>
          <BoardOfDirectors />
          <ManagementTeam />
          <CallToAction/>
          <RestOfTeam/>
        </div>



      </div>
    </>
  )
}

export default OurTeam
