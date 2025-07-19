import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { createJobApi } from '../../services/jobServices'
import { toast } from 'react-toastify'

const PostJob = () => {
    const token = useSelector((state) => state.auth.token)
    const companyId = useSelector((state) => state.auth.userInfo?.company._id)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [jobData, setJobData] = useState({
        title: "",
        requirements: "",
        description: "",
        salary: "",
        location: "",
        jobType: "Full-Time",
        experience: "0",
        position: "",
        companyId: "",
    })

    const handleChange = (e) => {
        setJobData({ ...jobData, [e.target.name]: e.target.value })
    }

    const handleAddJob = async (e) => {
        e.preventDefault()
        try {
            const headers = {
                Authorization: `Bearer ${token}`
            }

            const finalJobData = {
                ...jobData,
                companyId,
            }

            console.log("Job Data :", finalJobData);

            const response = await createJobApi(finalJobData, headers)
            if (response.status === 201) {
                toast.success("Job posted succesfully!")
                setIsModalOpen(false)
            }

            setJobData({
                title: "",
                description: "",
                requirements: "",
                salary: "",
                location: "",
                jobType: "",
                experience: "",
                position: "",
                companyId: companyId || "",
            });

        } catch (error) {
            console.error("Error Posting Job!", error)
            toast.error("Failed to post job")
        }
    }

    return (
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
                                    name='title'
                                    value={jobData.title}
                                    required
                                    placeholder="Enter job title"
                                    className="input mt-1 w-full border-neutral-content rounded-md p-2"
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Requirements */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Requirements</label>
                                <input
                                    type="text"
                                    name='requirements'
                                    value={jobData.requirements}
                                    required
                                    placeholder="e.g. HTML, CSS, JavaScript"
                                    className="input mt-1 w-full border-neutral-content rounded-md p-2"
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Description */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium">Description</label>
                                <textarea
                                    name='description'
                                    value={jobData.description}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter job description here"
                                    className="input mt-1 w-full border-neutral-content rounded-md p-2"
                                ></textarea>
                            </div>

                            <div className='flex gap-2'>
                                {/* Location */}
                                <div className="mb-4 flex-1">
                                    <label className="block text-sm font-medium">Location</label>
                                    <input
                                        type="text"
                                        name='location'
                                        value={jobData.location}
                                        onChange={handleChange}
                                        placeholder="Enter job location"
                                        className="input mt-1 w-full border-neutral-content rounded-md"
                                    />
                                </div>
                                {/* Salary */}
                                <div className="mb-4 flex-1">
                                    <label className="block text-sm font-medium">Salary in LPA</label>
                                    <input
                                        name='salary'
                                        value={jobData.salary}
                                        onChange={handleChange}
                                        type="number"
                                        placeholder="Enter Salary"
                                        min="1"
                                        max="10000000"
                                        className="input mt-1 w-full border-neutral-content rounded-md"
                                    />
                                </div>
                            </div>

                            <div className='flex gap-2'>
                                {/* Job Type */}
                                <div className="mb-4 flex-1">
                                    <label className="block text-sm font-medium">Job Type</label>
                                    <select
                                        name="jobType"
                                        value={jobData.jobType}
                                        onChange={handleChange}
                                        className="select mt-1 w-full border-neutral-content rounded-md">
                                        <option value="Full-Time">Full-time</option>
                                        <option value="Part-Time">Part-time</option>
                                        <option value="Remote">Remote</option>
                                        <option value="Internship">Internship</option>
                                        <option value="Hybrid">Hybrid</option>
                                    </select>
                                </div>

                                {/* Experience Level */}
                                <div className="mb-4 flex-1">
                                    <label className="block text-sm font-medium">Experience Level</label>
                                    <select
                                        name="experience"
                                        value={jobData.experience}
                                        onChange={handleChange}
                                        className="select mt-1 w-full border-neutral-content rounded-md">
                                        <option value="0">Any</option>
                                        <option value="1">Minimum 1year</option>
                                        <option value="2">2+ Years</option>
                                        <option value="5">5+ Years</option>
                                    </select>
                                </div>

                                {/* Openings */}
                                <div className="mb-4 flex-1">
                                    <label className="block text-sm font-medium">No of Openings</label>
                                    <input
                                        type="number"
                                        name="position"
                                        value={jobData.position}
                                        onChange={handleChange}
                                        placeholder="Enter Openings"
                                        min="1"
                                        max="10"
                                        className="input mt-1 w-full border-neutral-content rounded-md"
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
                                    className="btn btn-accent"
                                    onClick={handleAddJob}>
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    )
}

export default PostJob