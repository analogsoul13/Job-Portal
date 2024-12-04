import React from 'react'
import ProfileCardRecruiter from '../Recruiter/ProfileCardRecruiter'
import HeroSectioRecruiter from './HeroSectioRecruiter'

function RecruiterDashboard() {
  return (
    <>
    <div className='max-w-full fade-in bg-base-200 flex flex-col lg:flex-row mb-4'>
      {/* Left Section */}  
      <div className='lg:w-3/12 p-4'>
        <ProfileCardRecruiter/>
      </div>
      {/* Right Section */}
      <div className='lg:w-9/12 p-4 space-y-4'>
        <HeroSectioRecruiter/>   
        <div className='bg-base-100 rounded-lg p-4'>
          <h1 className='text-2xl font-bold'>Post Jobs</h1>  
        </div>  
      </div>
    </div>
    </>
  )
}

export default RecruiterDashboard