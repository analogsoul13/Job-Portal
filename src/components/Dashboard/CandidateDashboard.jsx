import React, { useState } from 'react'
import HeroSection from './HeroSection'
import { Link } from 'react-router-dom'
import ProfileCard from '../Candidate/ProfileCard'

function CandidateDashboard() {
    return (
        <>
            <div className='max-w-7xl fade-in bg-base-200 flex flex-col lg:flex-row mx-auto mb-4'>
                {/* LeftProfileSection */}
                <div className='lg:w-1/4 p-4'>
                    <ProfileCard/>
                </div>
                {/* Right Main Section */}
                <div className='lg:w-3/4 p-4 space-y-4'>
                    {/* Search */}
                    <div className="bg-base-100 shadow-xl p-6 rounded-lg">
                        <input type="text" className="w-full input input-bordered p-3 rounded-lg" placeholder="Search for jobs..." />
                        <h2 className="mt-4 text-2xl font-semibold">Welcome, <span className='text-accent'>Anne Hathaway</span></h2>
                    </div>
                    {/* Hero Section */}
                    <HeroSection />
                    {/* Featured Jobs */}
                    <div className='flex flex-col bg-base-100 rounded-lg shadow-xl justify-center mt-6 items-center p-4'>
                        <h1 className='text-2xl font-bold'>Featured Jobs</h1>
                        <div className='grid sm:grid-cols-2 gap-6 mt-4 sm:px-6'>
                            {/* Job Card */}
                            <div className='card bg-base-200 rounded-lg shadow hover:shadow-lg overflow-hidden w-[400px] h-full'>
                                <div className="card-body">
                                    <div className='flex justify-between'>
                                        <img className='rounded-full h-6 w-6' src="https://e7.pngegg.com/pngimages/882/225/png-clipart-google-logo-google-logo-google-search-icon-google-text-logo.png" alt="" />
                                        <div className="badge badge-warning text-slate-100 text-xs">Featured</div>
                                    </div>

                                    <h4>Google LLM</h4>
                                    <h2 className="card-title text-slate-700">MERN Stack Developer</h2>
                                    <div className='flex justify-between'>
                                        <p className='text-xs text-slate-500'><i className="fa-solid fa-location-dot me-2" />Mumbai</p>
                                        <p className='text-xs text-slate-500'><i className="fa-solid fa-clock me-2" />Full-Time</p>
                                        <p className='text-xs text-slate-500'><i className="fa-solid fa-sack-dollar me-2" />45LPA</p>
                                    </div>
                                    <div>
                                        <h3 className='text-sm text-slate-600'>Job Description</h3>
                                        <p className='text-xs text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, incidunt!</p>
                                    </div>
                                    <div>
                                        <button className='btn hover:shadow-xl btn-accent text-slate-50'>Apply Now</button>
                                    </div>


                                </div>
                            </div>
                            {/* Card */}
                            <div className='card bg-base-200 rounded-lg shadow hover:shadow-lg overflow-hidden w-[400px] h-full'>
                                <div className="card-body">
                                    <div className='flex justify-between'>
                                        <img className='rounded-full h-6 w-6' src="https://iconape.com/wp-content/png_logo_vector/amazon-icon.png" alt="" />
                                        <div className="badge badge-warning text-slate-100 text-xs">Featured</div>
                                    </div>

                                    <h4>Amazon</h4>
                                    <h2 className="card-title text-slate-700">MERN Stack Developer</h2>
                                    <div className='flex justify-between'>
                                        <p className='text-xs text-slate-500'><i className="fa-solid fa-location-dot me-2" />Mumbai</p>
                                        <p className='text-xs text-slate-500'><i className="fa-solid fa-clock me-2" />Full-Time</p>
                                        <p className='text-xs text-slate-500'><i className="fa-solid fa-sack-dollar me-2" />45LPA</p>
                                    </div>
                                    <div>
                                        <h3 className='text-sm text-slate-600'>Job Description</h3>
                                        <p className='text-xs text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, incidunt!</p>
                                    </div>
                                    <div>
                                        <button className='btn hover:shadow-xl btn-accent text-slate-50'>Apply Now</button>
                                    </div>


                                </div>
                            </div>

                            {/* Card */}
                            <div className='card bg-base-200 rounded-lg shadow hover:shadow-lg overflow-hidden w-[400px] h-full'>
                                <div className="card-body">
                                    <div className='flex justify-between'>
                                        <img className='rounded-full h-6 w-6' src="https://shreecomputers.co.in/wp-content/uploads/2020/12/microsoft-icon-logo--1024x1024.png" alt="" />
                                        <div className="badge badge-warning text-slate-100 text-xs">Featured</div>
                                    </div>

                                    <h4>Microsoft</h4>
                                    <h2 className="card-title text-slate-700">MERN Stack Developer</h2>
                                    <div className='flex justify-between'>
                                        <p className='text-xs text-slate-500'><i className="fa-solid fa-location-dot me-2" />Mumbai</p>
                                        <p className='text-xs text-slate-500'><i className="fa-solid fa-clock me-2" />Full-Time</p>
                                        <p className='text-xs text-slate-500'><i className="fa-solid fa-sack-dollar me-2" />45LPA</p>
                                    </div>
                                    <div>
                                        <h3 className='text-sm text-slate-600'>Job Description</h3>
                                        <p className='text-xs text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, incidunt!</p>
                                    </div>
                                    <div>
                                        <button className='btn hover:shadow-xl btn-accent text-slate-50'>Apply Now</button>
                                    </div>


                                </div>
                            </div>
                            {/* Card */}
                            <div className='card bg-base-200 rounded-lg shadow hover:shadow-lg overflow-hidden w-[400px] h-full'>
                                <div className="card-body">
                                    <div className='flex justify-between'>
                                        <img className='rounded-full h-6 w-6' src="https://shreecomputers.co.in/wp-content/uploads/2020/12/microsoft-icon-logo--1024x1024.png" alt="" />
                                        <div className="badge badge-warning text-slate-100 text-xs">Featured</div>
                                    </div>

                                    <h4>Microsoft</h4>
                                    <h2 className="card-title text-slate-700">MERN Stack Developer</h2>
                                    <div className='flex justify-between'>
                                        <p className='text-xs text-slate-500'><i className="fa-solid fa-location-dot me-2" />Mumbai</p>
                                        <p className='text-xs text-slate-500'><i className="fa-solid fa-clock me-2" />Full-Time</p>
                                        <p className='text-xs text-slate-500'><i className="fa-solid fa-sack-dollar me-2" />45LPA</p>
                                    </div>
                                    <div>
                                        <h3 className='text-sm text-slate-600'>Job Description</h3>
                                        <p className='text-xs text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, incidunt!</p>
                                    </div>
                                    <div>
                                        <button className='btn hover:shadow-xl btn-accent text-slate-50'>Apply Now</button>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CandidateDashboard