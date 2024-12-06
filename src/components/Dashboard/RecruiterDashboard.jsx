import React, { useState } from 'react'
import HeroSectioRecruiter from './HeroSectioRecruiter'
import SideBar from '../Recruiter/SideBar'

function RecruiterDashboard() {
  // To track the active section
  const [activeSection, setActiveSection] = useState('dashboard')

  // Dynamic Rendering
  const rennderRightSection = ()=>{
    switch (activeSection) {
      case 'dashboard':
        return <HeroSectioRecruiter/>
      case 'analytics':
        return <div>Analytics</div>
      case 'candidates':
        return <div>Candidate Details</div>
      case 'settings':
        return <div>Settings</div>
      default:
        return <div>No found</div>
    }
  }
  return (
    <>
      <div className='max-w-full fade-in bg-base-100 flex flex-col gap-2 lg:flex-row mb-4'>
        {/* Left Section SideBar */}
        <div className='lg:w-1/12'>
          <SideBar onOptionSelect={setActiveSection} />
        </div>
        {/* Data Section */}
        <div className='lg:w-3/12 bg-base-200 p-2 space-y-4'>
          {/* Search */}
          <div className='bg-base-100 rounded-lg p-4'>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd" />
              </svg>
            </label>
          </div>
          {/* Applicants */}
          <div className="flex">
            <div className="card bg-base-100 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Karthik Paul</h2>
                <p className='text-sm text-slate-500'>Software Engineer</p>
                <div className='flex space-x-3 text-sm text-base-content'>
                  <span className='p-2 w-14 bg-slate-100 rounded-lg'>React</span>
                  <span className='p-2 bg-slate-100 rounded-lg'>Node Js</span>
                </div>

                <div className="card-actions text-sm text-primary justify-end">
                  <p>Application Received</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* RightMain Section */}
        <div className='lg:w-8/12 p-2 bg-base-200 '>
          {rennderRightSection()}
        </div>
      </div>
    </>
  )
}

export default RecruiterDashboard