import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
    return (
        <>
            <div className=''>
                <Navbar />
                <div className='grid sm:grid-cols-2 sm:px-6'>
                    <div className='flex flex-col justify-center p-6 sm:mt-14 gap-6 items-start w-full h-[450px]'>
                        <h1 className='text-5xl font-bold slide-in'><span className='text-blue-500'>Connecting Talent</span> <br /> With <span>Opportunites</span></h1>
                        <p className='font-thin slide-in'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eligendi. Corrupti tempora, ipsa saepe nostrum quod earum nulla quisquam hic.</p>
                        <button className='btn shadow-xl btn-outline slide-in'>Register</button>
                    </div>
                    <div className='flex justify-center shadow-xl bg-blue-100 rounded-3xl items-center w-full h-full'>
                        <img className='fade-in' src="https://clipart-library.com/new_gallery/551372_man-with-laptop-png.png" alt="" />

                    </div>
                </div>
                {/* Featured Jobs */}
                <div className='flex flex-col justify-center items-center p-2'>
                    <h1 className='text-3xl font-bold'>Featured Jobs</h1>
                    <div className='grid sm:grid-cols-3 gap-6 mt-4 sm:px-6'>
                        {/* Card */}
                        <div className='card rounded-lg shadow slide-in hover:shadow-lg overflow-hidden w-[400px] h-full'>
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
                        <div className='card rounded-lg shadow slide-in hover:shadow-lg overflow-hidden w-[400px] h-full'>
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
                        <div className='card rounded-lg shadow slide-in hover:shadow-lg overflow-hidden w-[400px] h-full'>
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

                {/* What we offer */}
                <div>
                    <h1>What we offer</h1>
                </div>

            </div>


        </>
    )
}

export default Home