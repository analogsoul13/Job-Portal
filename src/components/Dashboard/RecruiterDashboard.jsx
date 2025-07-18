import React, { useState } from 'react'
import HeroSectioRecruiter from './HeroSectioRecruiter'
import SideBar from '../Recruiter/SideBar'
import RecruiterProfile from '../Recruiter/RecruiterProfile'
import DataListsSection from '../Recruiter/DataListsSection'
import Applicants from './Applicants'
import ManageJobs from '../Recruiter/ManageJobs'

function RecruiterDashboard() {
  // To track the active section
  const [activeSection, setActiveSection] = useState('dashboard')

  // Dynamic Rendering  
  const renderRightSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <HeroSectioRecruiter />
      case 'analytics':
        return <div>Analytics</div>
      case 'candidates':
        return <Applicants />
      case 'managejobs':
        return <ManageJobs/>
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
        <div className='lg:w-2/12'>
          <SideBar onOptionSelect={setActiveSection} activeId={activeSection} />
        </div>
        {/* Data Lists Section / shown only when clicked candidates */}
        {activeSection == 'candidates' && (
          <div className='lg:w-3/12 bg-base-200 p-4 space-y-4'>
            <DataListsSection />
          </div>
        )}

        {/* RightMain Section */}
        <div className={`${activeSection === 'candidates'? 'lg:w-8/12' : 'lg:w-11/12'} bg-base-200`}>
          {renderRightSection()}
        </div>
      </div>
    </>
  )
}

export default RecruiterDashboard