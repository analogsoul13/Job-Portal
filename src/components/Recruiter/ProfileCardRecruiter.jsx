import React from 'react'
import { Link } from 'react-router-dom'

function ProfileCardRecruiter() {
    return (
        <>
            <div className='bg-base-100 rounded-xl sm:col-span-1 p-2'>
                <div className="rounded-t-lg h-32 overflow-hidden">
                    <img 
                        className="object-cover object-top w-full" 
                        src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' 
                        alt='Mountain' 
                    />
                </div>
                <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                    <img 
                        className="object-cover object-center" 
                        src='https://ideogram.ai/assets/image/lossless/response/zCqZ63LMSqyNL1bbkXtP7Q' 
                        alt='Profile Picture' 
                    />
                </div>
                <div className="text-center mt-2">
                    <h2 className="font-semibold">Sarah Smith</h2>
                    <p className="text-gray-500">HR</p>
                </div>
                
                <div className='bg-base-200 mt-4 rounded-lg p-2'>
                    <ul className='text-sm font-semibold'>
                        <Link to={'/rdashboard'}>
                            <li className='p-2 hover:bg-base-100 cursor-pointer rounded-md'>
                                <i className="fa-solid fa-sm fa-house me-2" />Dashboard
                            </li>
                        </Link>
                        
                        <div className="dropdown w-full">
                            <div tabIndex={0} role="button" className='p-2 cursor-pointer'>
                                <i className="fa-solid fa-sm fa-briefcase me-2" />Manage Jobs
                            </div>
                            <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full'>
                                <li>
                                    <Link to="/manage-jobs">
                                        <i className="fa-solid fa-list me-2" />View Jobs
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/post-job">
                                        <i className="fa-solid fa-plus me-2" />Post New Job
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        <Link to={'/recruiterprofile'}>
                            <li className='p-2 hover:bg-base-100 cursor-pointer rounded-md'>
                                <i className="fa-solid fa-sm fa-id-card-clip me-2" />Profile
                            </li>
                        </Link>
                        
                        <li className='p-2 hover:bg-base-100 cursor-pointer rounded-md'>
                            <i className="fa-solid fa-sm fa-list-check me-2" />Candidates
                        </li>

                        <li className='p-2 hover:bg-base-100 cursor-pointer rounded-md'>
                            <i className="fa-solid fa-sm fa-calendar-days me-2" />Interview Schedule
                        </li>

                        <li className='p-2 hover:bg-base-100 cursor-pointer rounded-md'>
                            <i className="fa-solid fa-sm fa-chart-line me-2" />Report Analytics
                        </li>
                        
                        <li className='p-2 hover:bg-base-100 cursor-pointer rounded-md'>
                            <i className="fa-solid fa-sm fa-gear me-2" />Profile Settings
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProfileCardRecruiter