import React, { useState } from 'react'
import HeroSection from './HeroSection'
import ProfileCard from '../Candidate/ProfileCard'
import AppliedJobList from '../Candidate/AppliedJobList'

function CandidateDashboard() {
    // To track active session
    const [activeSection, setActiveSection] = useState('dashboard')

    // Dynamic Rendering
    const renderRightSection = () => {
        switch (activeSection){
            case 'dashboard':
                return <HeroSection/>
            case 'myapplications':
                return <AppliedJobList/>
            default:
                return <div>Not Found</div>
                
        }
    }
    return (
        <>
            <div className='max-w-full fade-in bg-base-200 flex flex-col lg:flex-row mx- mb-4'>
                {/* LeftProfileSection */}
                <div className='lg:w-1/4 p-4'>
                    <ProfileCard onOptionSelect={setActiveSection} activeId={activeSection}/>
                </div>
                {/* Right Main Section */}
                <div className='lg:w-3/4 p-4 space-y-4'>
                    {/* Search */}
                    <div className="bg-base-100 shadow-xl p-6 rounded-lg">
                        <input type="text" className="w-full input input-bordered p-3 rounded-lg" placeholder="Search for jobs..." />
                        <h2 className="mt-4 text-2xl font-semibold">Welcome, <span className='text-accent'>Anne Hathaway</span></h2>
                    </div>
                    {/* Hero Section */}
                    {renderRightSection()}
                </div>
            </div>
        </>
    )
}

export default CandidateDashboard