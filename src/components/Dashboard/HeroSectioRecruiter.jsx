import React from 'react'

function HeroSectioRecruiter() {
    return (
        <>
            <div className='flex flex-col bg-base-100 rounded-lg shadow-xl justify-center space-y-3 items-center p-4'>
                <h1 className='text-base-content'>Dashboard</h1>
                <div className='grid sm:grid-cols-3 gap-4'>
                    {/* Card */}
                    <div className="mockup-code">
                        <pre data-prefix="$"><code>npm i daisyui</code></pre>
                        <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
                        <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
                        <div className='flex justify-center space-x-3 items-center h-full'>
                            <button className='btn'>Total Jobs</button>
                            <button className='btn btn-link text-base-200'>Total Jobs</button>
                        </div>
                    </div>
                    {/* Card */}
                    <div className="mockup-code">
                        <pre data-prefix="$"><code>npm i daisyui</code></pre>
                        <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
                        <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
                        <div className='flex justify-center space-x-3 items-center h-full'>
                            <button className='btn'>Applicatons Today</button>
                        </div>
                    </div>
                    {/* Card2 */}
                    <div className='w-72 h-72 shadow-2xl rounded-xl bg-offerCover2 bg-cover bg-center'>
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
                    {/* Card3 */}
                    <div className='w-72 h-72 shadow-2xl rounded-xl bg-offerCover2 bg-cover bg-center'>
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
                    {/* Card4 */}
                    <div className='w-72 h-72 shadow-2xl rounded-xl bg-offerCover2 bg-cover bg-center'>
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
            </div>
        </>
    )
}

export default HeroSectioRecruiter