import React from 'react'

function JobCard() {
    return (
        <>
            <div className='card rounded-lg shadow fade-in hover:shadow-lg overflow-hidden w-auto h-full'>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <img className='rounded-full h-6 w-6' src="https://e7.pngegg.com/pngimages/882/225/png-clipart-google-logo-google-logo-google-search-icon-google-text-logo.png" alt="" />
                        <div className="badge badge-warning text-slate-100 text-xs">Featured</div>
                    </div>

                    <h4>Google LLM</h4>
                    <h2 className="card-title text-slate-700">Software Developer</h2>
                    <div className='flex justify-between'>
                        <p className='text-xs text-slate-500'><i className="fa-solid fa-location-dot me-2" />Mumbai</p>
                        <p className='text-xs text-slate-500'><i className="fa-solid fa-clock me-2" />Full-Time</p>
                        <p className='text-xs text-slate-500'><i className="fa-solid fa-sack-dollar me-2" />45LPA</p>
                    </div>
                    <div>
                        <h3 className='text-sm text-slate-600'>Job Description</h3>
                        <p className='text-xs text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, incidunt!</p>
                    </div>
                    <div className='flex justify-between'>
                        <button className='btn hover:shadow-xl btn-accent text-slate-50'>Apply Now</button>
                        <button className='btn btn-link text-base-content'>View</button>
                    </div>


                </div>
            </div>
        </>
    )
}

export default JobCard