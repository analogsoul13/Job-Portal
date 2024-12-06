import React, { useState } from 'react'
import HeroSectioRecruiter from './HeroSectioRecruiter'
import SideBar from '../Recruiter/SideBar'
import RecruiterProfile from '../Recruiter/RecruiterProfile'
import DataListsSection from '../Recruiter/DataListsSection'

function RecruiterDashboard() {
  // To track the active section
  const [activeSection, setActiveSection] = useState('dashboard')

  // Dynamic Rendering
  const rennderRightSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <HeroSectioRecruiter />
      case 'analytics':
        return <div>Analytics</div>
      case 'candidates':
        return <div>Applicants</div>
      case 'settings':
        return <RecruiterProfile />
      default:
        return <div>No found</div>
    }
  }
  return (
    <>
      <div className='max-w-full fade-in bg-base-100 flex flex-col lg:flex-row mb-4'>
        {/* Left Section SideBar */}
        <div className='lg:w-1/12'>
          <SideBar onOptionSelect={setActiveSection} />
        </div>
        {/* Data Lists Section */}
        <div className='lg:w-3/12 bg-base-200 p-4 space-y-4'>
          <DataListsSection/>
        </div>
        {/* RightMain Section */}
        <div className='lg:w-8/12 bg-base-200 '>
          {rennderRightSection()}
        </div>
      </div>
    </>
  )
}

export default RecruiterDashboard