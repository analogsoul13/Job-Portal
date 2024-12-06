import React, { useState } from 'react'

function HeroSectioRecruiter() {
    const [isModalOpen, setIsModalOpen] = useState(true)
    return (
        <>
            <div className='flex mt-4 flex-col bg-base-100 rounded-lg shadow-xl justify-center space-y-3 items-center p-4'>
                <h1 className='text-base-content text-center text-xl'>Dashboard</h1>
                <div className='grid w-full sm:grid-cols-2 gap-4'>
                    {/* Modal */}
                    <div className='flex justify-center bg-base-200 rounded-lg p-4 col-span-1'>
                        <button onClick={() => { setIsModalOpen(true) }} className='btn btn-outline'>Post an Opening</button>
                        {isModalOpen && (
                            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                                <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6">
                                    <h2 className="text-2xl font-semibold mb-4">Create Job Opening</h2>

                                    <form>
                                        {/* Job Title */}
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium">Job Title</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Enter job title"
                                                className="mt-1 w-full border rounded-md p-2"
                                            />
                                        </div>

                                        {/* Description */}
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium">Description</label>
                                            <textarea
                                                required
                                                placeholder="Enter job description"
                                                className="mt-1 w-full border rounded-md p-2"
                                            ></textarea>
                                        </div>

                                        {/* Location */}
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium">Location</label>
                                            <input
                                                type="text"
                                                placeholder="Enter job location"
                                                className="mt-1 w-full border rounded-md p-2"
                                            />
                                        </div>

                                        {/* Job Type */}
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium">Job Type</label>
                                            <select className="mt-1 w-full border rounded-md p-2">
                                                <option>Full-time</option>
                                                <option>Part-time</option>
                                                <option>Remote</option>
                                            </select>
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex justify-end space-x-4">
                                            <button
                                                type="button"
                                                onClick={() => setIsModalOpen(false)}
                                                className="btn btn-error">
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-accent">
                                                Create
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}

                    </div>
                    {/* Card */}
                    <div className='flex justify-center bg-base-200 rounded-lg p-4'>
                        <button className='btn btn-outline'>View All Jobs</button>
                    </div>
                </div>
                {/* Stats */}
                <div className='flex flex-col items-center bg-base-200 p-3 rounded-lg justify-center w-full'>
                    <h1 className='text-base-content text-xl p-2'>Analytics</h1>
                    <div className="stats w-full shadow">
                        <div className="stat place-items-center">
                            <div className="stat-title">Jobs Posted</div>
                            <div className="stat-value">31K</div>
                            <div className="stat-desc">From January 1st to February 1st</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">Appicants</div>
                            <div className="stat-value text-accent">4,200</div>
                            <div className="stat-desc text-accent">↗︎ 40 (2%)</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">Interviews</div>
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