import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { applyForJobApi } from '../services/jobServices'
import { toast } from 'react-toastify'

function JobCard({ job, showApplyButton = true, applicationStatus = null }) {
    const token = useSelector((state) => state.auth.token)
    const [isApplied, setIsApplied] = useState(false)

    const handleApply = async () => {
        try {
            const headers = {
                Authorization: `Bearer ${token}`
            }
            const jobId = job._id

            const res = await applyForJobApi(jobId, headers)
            if (res.status === 201) {
                toast.success(res.data.message)
                setIsApplied(true)
            } else {
                toast.error(res.data.message)
            }

        } catch (error) {
            console.error("Application failed:", error)
            toast.error("Failed to apply!")
        }
    }
    return (
        <>
            <div className='card rounded-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out bg-base-100 shadow fade-in overflow-hidden w-auto h-full'>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <img className='rounded-full h-6 w-6' src="https://e7.pngegg.com/pngimages/882/225/png-clipart-google-logo-google-logo-google-search-icon-google-text-logo.png" alt="" />
                        <div className="badge badge-warning text-slate-100 text-xs">Featured</div>
                    </div>

                    <h4>{job.company.name}</h4>
                    <h2 className="card-title text-base-content">{job.title}</h2>
                    <div className='flex justify-between'>
                        <p className='text-xs text-slate-500'><i className="fa-solid fa-location-dot me-2" />{job.location}</p>
                        <p className='text-xs text-slate-500'><i className="fa-solid fa-clock me-2" />{job.jobType}</p>
                        <p className='text-xs text-slate-500'><i className="fa-solid fa-sack-dollar me-2" />{job.salary}LPA</p>
                    </div>
                    <div>
                        <h3 className='text-sm text-slate-600'>Job Description</h3>
                        <p className='text-xs text-slate-500'>{job.description}</p>
                    </div>
                    <div className='flex justify-between items-center mt-2'>
                        {showApplyButton ? (
                            <button
                                onClick={handleApply}
                                disabled={isApplied}
                                className={`btn hover:shadow-xl ${isApplied ? "btn-accent" : "btn-accent text-slate-50"}`}>
                                {isApplied ? "Applied" : "Apply Now"}
                            </button>
                        ) : (
                            <span className={`text-sm font-semibold uppercase ${applicationStatus === 'accepted' ? 'text-green-600' :
                                    applicationStatus === 'rejected' ? 'text-red-600' :
                                        'text-yellow-600'
                                }`}>
                                {applicationStatus}
                            </span>
                        )}

                        <button className='btn btn-link text-base-content'>View</button>
                    </div>



                </div>
            </div>
        </>
    )
}

export default JobCard