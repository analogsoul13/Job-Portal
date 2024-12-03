import React from 'react'
import ProfileCard from '../ProfileCard'
import HeroSection from './HeroSection'

function RecruiterDashboard() {
  return (
    <>
    <div className='max-w-7xl fade-in bg-base-200 flex flex-col lg:flex-row mx-auto mb-4'>
      {/* Left Section */}
      <div className='lg:w-1/3 p-4'>
        <ProfileCard/>
      </div>
      {/* Right Section */}
      <div className='lg:w-2/3 p-4 space-y-4'>
        <HeroSection/>    
        <div className='bg-base-100 rounded-lg p-4'>
          <h1 className='text-2xl font-bold'>Post Jobs</h1>  
        </div>  
      </div>
    </div>
    </>
  )
}

export default RecruiterDashboard