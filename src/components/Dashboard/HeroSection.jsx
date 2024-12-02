import React from 'react'

function HeroSection() {
    return (
        <>
            <div className='flex flex-col bg-base-100 rounded-lg shadow-xl justify-center space-y-3 mt-6 items-center p-4'>
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
                    <h1 className='text-base-content p-2'>Have a look here !</h1>
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
            </div>
        </>
    )
}

export default HeroSection