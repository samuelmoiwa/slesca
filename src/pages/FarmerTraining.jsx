import React from 'react'
import HeroSection from '../components/farmerTraining/HeroSection'
import FarmerTrainingAndCapacityBuilding from '../components/farmerTraining/FarmerTrainingAndCapacityBuilding'

const FarmerTraining = () => {
  return (
    <>
    <div className='bg-gradient-to-b from-blue-50 to-green-200 w-full h-full flex justify-center items-center flex-col'>
        <HeroSection/>
      <div className=' w-full py-14 flex flex-col justify-center
        items-center mt-5 mb-10'
      >
        <FarmerTrainingAndCapacityBuilding/>
      </div>
    </div>
  </>
  )
}

export default FarmerTraining
