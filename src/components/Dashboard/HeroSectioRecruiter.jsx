import React, { useState } from 'react'

function HeroSectioRecruiter() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <>
            <div className='flex mt-4 flex-col bg-base-100 rounded-lg shadow-xl justify-center mx-4 space-y-3 items-center p-4'>
                <h1 className='text-base-content text-center text-xl'>Dashboard</h1>
                <div className='grid w-full sm:grid-cols-2 gap-4'>
                    {/* Modal */}
                    <div className='flex justify-center items-center bg-base-200 rounded-lg p-4 col-span-1'>
                        <button onClick={() => { setIsModalOpen(true) }} className='btn btn-neutral'><i className="fa-solid fa-square-plus" />Post an Opening</button>
                        {isModalOpen && (
                            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 fade-in flex items-center justify-center z-50">
                                <div className="bg-base-100 w-full max-w-lg rounded-lg shadow-lg p-6">
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

                                        <div className='flex justify-between gap-2'>
                                            {/* Location */}
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium">Location</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter job location"
                                                    className="mt-1 w-full border rounded-md p-2"
                                                />
                                            </div>
                                            {/* Salary */}
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium">Salary</label>
                                                <input
                                                    type="number"
                                                    placeholder="Enter Salary"
                                                    className="mt-1 w-full border rounded-md p-2"
                                                />
                                            </div>
                                        </div>

                                        <div className='flex items-center justify-between'>
                                            {/* Job Type */}
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium">Job Type</label>
                                                <select className="mt-1 w-full border rounded-md p-2">
                                                    <option>Full-time</option>
                                                    <option>Part-time</option>
                                                    <option>Remote</option>
                                                    <option>Hybrid</option>
                                                </select>
                                            </div>

                                            {/* Experience Level */}
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium">Experience Level</label>
                                                <select className="mt-1 w-full border rounded-md p-2">
                                                    <option>Any</option>
                                                    <option>Minimum 1year</option>
                                                    <option>2+ Years</option>
                                                    <option>5+ Years</option>
                                                </select>
                                            </div>

                                            {/* Openings */}
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium">No of Openings</label>
                                                <input
                                                    type="number"
                                                    placeholder="Enter Openings"
                                                    className="mt-1 border rounded-md p-2"
                                                />
                                            </div>
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
                    {/* ViewJObs */}
                    <div className='flex justify-center bg-base-200 rounded-lg p-4'>
                        <button className='btn btn-accent'><i className="fa-solid fa-list" />View All Jobs Posted</button>
                    </div>
                </div>
                {/* Image */}
                <div className='flex bg-heroCover rounded-lg bg-cover w-full h-full lg:h-80'>
                    <p className='text-center text-sm text-base-content rounded-t-lg p-2 bg-base-300 bg-opacity-70 lg:h-24'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nesciunt illum ab cum dicta vel deserunt reiciendis iusto alias ea perferendis, ratione accusamus repudiandae ut in aliquid ullam sed modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat voluptatum asperiores quidem architecto natus ratione amet quia doloremque cupiditate ullam.</p>
                </div>
                {/* Stats */}
                <div className='flex flex-col  items-center bg-base-200 p-3 rounded-lg justify-center w-full'>
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