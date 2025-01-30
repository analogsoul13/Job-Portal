import React from 'react'

function HeroSection() {
    return (
        <>
            <div className='flex flex-col bg-base-100 rounded-lg shadow-xl justify-center space-y-3 items-center p-4 fade-in'>
                <span className='font-bold sm:text-xl md:text-2xl bg-base-200 px-4 mx-auto py-2 rounded-full'>Connecting Talent with Opportunities</span>
                <p className='text-center text-xs md:text-md text-base-content p-1'>Join thousands of job seekers and recruiters connecting on our platform. Find your perfect match and take the next step in your journey.</p>
                <div className='grid sm:grid-cols-2 gap-4'>
                    {/* Card */}
                    <div className='w-96 h-72 shadow-2xl rounded-xl col-span-1 bg-offerCover bg-cover bg-center'>
                        <div className="flex flex-col h-full justify-between">
                            <div className="flex-1">

                            </div>
                            {/* Bottom */}
                            <div className='p-4 glass rounded-b-xl text-base-100 text-md'>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                                <div className='mt-2'>
                                    <button className='btn btn-sm btn-accent'>Explore</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card2 */}
                    <div className='w-96 h-72 shadow-2xl rounded-xl bg-offerCover2 bg-cover bg-center col-span-1'>
                        <div className="flex flex-col h-full justify-between">
                            <div className="flex-1">

                            </div>
                            {/* Bottom */}
                            <div className='p-4 glass rounded-b-xl text-base-100 text-md'>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                                <div className='mt-2'>
                                    <button className='btn btn-sm btn-accent'>Explore</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Stats */}
                <div className='flex flex-col items-center mt-4 justify-center w-full'>
                    <h1 className='text-base-content text-xl p-2'>What we achieved</h1>
                    <div className="stats w-full shadow-xl">
                        <div className="stat place-items-center">
                            <div className="stat-title">Jobs</div>
                            <div className="stat-value">31K</div>
                            <div className="stat-desc">From January 1st to February 1st</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">Users</div>
                            <div className="stat-value text-accent">4,200</div>
                            <div className="stat-desc text-accent">↗︎ 40 (2%)</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">Recruiters</div>
                            <div className="stat-value">1,200</div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div>
                    </div>
                </div>
                {/* Featured Jobs */}
                <div className='flex flex-col bg-base-100 w-full rounded-lg shadow-xl justify-center mt-6 items-center p-4'>
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
        </>
    )
}

export default HeroSection