import React from 'react'
import HeroSection from '../components/services/TrainingWorkshops/HeroSection'
import TrainingAndWorkshopsComponent from '../components/services/TrainingWorkshops/TrainingAndWorkshopsComponent'

const TrainingWorkshops = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-blue-50 to-green-200 w-screen h-full flex justify-center items-center flex-col'>
          <HeroSection/>
        <div className=' w-full py-14 flex flex-col justify-center
          items-center mt-5 mb-10'
        >
          <TrainingAndWorkshopsComponent/>
        </div>
      </div>
    </>
  )
}

export default TrainingWorkshops
