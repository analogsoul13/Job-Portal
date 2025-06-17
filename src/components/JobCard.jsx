import React from 'react'

function JobCard({job}) {
    return (
        <>
            <div className='card rounded-lg bg-base-100 shadow fade-in hover:shadow-lg overflow-hidden w-auto h-full'>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <img className='rounded-full h-6 w-6' src="https://e7.pngegg.com/pngimages/882/225/png-clipart-google-logo-google-logo-google-search-icon-google-text-logo.png" alt="" />
                        <div className="badge badge-warning text-slate-100 text-xs">Featured</div>
                    </div>

                    <h4>{job.company.name}</h4>
                    <h2 className="card-title text-slate-700">{job.title}</h2>
                    <div className='flex justify-between'>
                        <p className='text-xs text-slate-500'><i className="fa-solid fa-location-dot me-2" />{job.location}</p>
                        <p className='text-xs text-slate-500'><i className="fa-solid fa-clock me-2" />{job.jobType}</p>
                        <p className='text-xs text-slate-500'><i className="fa-solid fa-sack-dollar me-2" />{job.salary}LPA</p>
                    </div>
                    <div>
                        <h3 className='text-sm text-slate-600'>Job Description</h3>
                        <p className='text-xs text-slate-500'>{job.description}</p>
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