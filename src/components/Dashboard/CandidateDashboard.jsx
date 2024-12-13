import React, { useState } from 'react'
import HeroSection from './HeroSection'
import ProfileCard from '../Candidate/ProfileCard'
import AppliedJobList from '../Candidate/AppliedJobList'
import FindJobs from '../Candidate/FindJobs'
import CandidateProfile from '../Candidate/CandidateProfile'

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
            case 'findjobs':
                return <FindJobs/>
            case 'myprofile':
                return <CandidateProfile/>
            default:
                return <div>Not Found</div>
                
        }
    }
    return (
        <>
            <div className='max-w-full fade-in bg-base-200 flex flex-col lg:flex-row mx- mb-4'>
                {/* LeftProfileSection */}
                <div className='hidden md:flex lg:w-1/4 p-4'>
                    <ProfileCard onOptionSelect={setActiveSection} activeId={activeSection}/>
                </div>
                {/* Right Main Section */}
                <div className='lg:w-3/4 p-4 space-y-4'>
                    {/* Hero Section */}
                    {renderRightSection()}
                </div>
            </div>
        </>
    )
}

export default CandidateDashboard