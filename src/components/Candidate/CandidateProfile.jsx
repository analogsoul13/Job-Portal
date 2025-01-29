import React, { useState } from 'react'
import SkillsSection from './SkillsSection'
import { Link } from 'react-router-dom'

function CandidateProfile() {
    const [editProfile, setEditProfile] = useState(false)
    const toggleEdit = () => {
        setEditProfile(!editProfile)
    }
    return (
        <>
            {/* Profile View Mode */}
            <div className='max-w-7xl mx-auto bg-base-100 border fade-in border-gray-200 shadow-xl rounded-2xl'>
                <div className='flex p-2 w-full'>
                    <div className='flex w-3/4 space-x-4 p-3'>
                        <div className="w-32 h-32 border-4 border-white rounded-full overflow-hidden">
                            <img className="object-cover object-center" src='https://www.citimuzik.com/wp-content/uploads/2023/01/283208521_531376795134961_2948576342949021745_n-810x1013.jpg' alt='Profile Picture' />
                        </div>
                        <div className='flex flex-col justify-center items-start'>
                            <h1 className='text-xl font-semibold'>Anne Hathaway</h1>
                            <p className='text-gray-500 text-sm'>Full Stack Web Developer</p>
                            <p className='text-base-content cursor-pointer hover:text-blue-400 text-xs'>anne34@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex w-1/4 justify-center items-center'>
                        <button onClick={toggleEdit} className='btn btn-accent'><i className="fa-solid fa-pen-to-square" />Edit</button>
                    </div>
                </div>
                <div className='flex flex-col p-4'>
                    <h2 className='text-lg font-semibold mb-2'>Professional Summary</h2>
                    <hr />
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium labore doloribus eum quo vitae vel aperiam ipsam dolore officiis nulla?</p>
                </div>

                <section className='flex flex-col px-4'>
                    <h2 className='text-lg font-semibold mb-2'>Skills</h2>
                    <hr />
                    <div className='flex space-x-3 py-2 flex-wrap'>
                        <span className='badge p-4 badge-neutral'>HTML</span>
                        <span className='badge p-4 badge-neutral'>CSS</span>
                        <span className='badge p-4 badge-neutral'>JS</span>
                        <span className='badge p-4 badge-neutral'>Python</span>
                    </div>
                </section>

                <section className='flex flex-col p-2 py-2 bg-base-200 rounded-xl shadow-xl mb-4 mx-4'>
                    <h2>Contact Information</h2>
                    <div className='flex flex-col sm:flex-row p-2 space-y-4 sm:space-y-0 sm:space-x-4'>
                        <div className='flex flex-col bg-base-100 rounded-lg space-y-3 text-sm p-2'>
                            <span><i className="fa-solid fa-envelope me-2" />Email : anctest@gmail.com</span>
                            <span><i className="fa-solid fa-location-dot me-2" />Place : Kakkoor</span>
                            <span><i className="fa-solid fa-location-arrow me-2" />State : Kerala</span>
                            <span><i className="fa-solid fa-location-crosshairs me-2" />PIN : 686661</span>
                        </div>
                        <div className='flex flex-col bg-base-100 rounded-lg text-sm space-y-3 p-2'>
                            <span><i className="fa-brands fa-github me-2" />Github : https://github.com</span>
                            <span><i className="fa-solid fa-briefcase me-2" />Portfolio : https://portfolio.com</span>
                            <span><i className="fa-brands fa-linkedin me-2" />LinkedIn : https://linkedin.com</span>
                            <span><i className="fa-brands fa-x-twitter me-2" />X : https://x.com</span>
                        </div>

                    </div>
                </section>

                <section className='flex flex-col p-4'>
                    <h2 className='text-lg font-semibold mb-2'>Education</h2>

                    <hr />
                </section>


            </div>

            {/* Edit Modal */}
            {editProfile && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative w-full sm:max-w-4xl bg-base-100 rounded-lg shadow-xl">
                        {/* Close Button */}
                        <button
                            className="btn sm:hidden btn-sm btn-circle absolute top-1 right-2"
                            onClick={toggleEdit}
                        >
                            ✕
                        </button>

                        {/* Right Profile */}
                        <div className="rounded-xl sm:col-span-3 p-4 bg-base-200">
                            {/* Profile Picture and bio container */}
                            <div className="flex space-x-4">
                                <div className="flex justify-center bg-base-300 rounded-lg w-full p-2 mb-4">
                                    <label className="flex flex-col items-center cursor-pointer">
                                        <div className="w-20 h-20 rounded-full border-4 border-base-300 shadow-2xl overflow-hidden mb-2">
                                            <img
                                                src="https://icon-library.com/images/edit-profile-icon/edit-profile-icon-15.jpg"
                                                alt="Profile Picture"
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <input
                                            type="file"
                                            className="hidden"
                                            accept="image/*"
                                        />
                                        <span className="text-slate-500 text-xs">
                                            Upload Profile Picture
                                        </span>
                                    </label>
                                </div>

                                {/* Bio */}
                                <div className="flex w-full mb-4">
                                    <textarea
                                        placeholder="Bio"
                                        className="textarea textarea-bordered textarea-xs w-full max-w-xl"
                                    ></textarea>
                                </div>
                            </div>

                            {/* Name */}
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="input input-bordered w-1/2"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="input input-bordered w-1/2"
                                />
                            </div>

                            {/* Phone and Email */}
                            <div className="flex space-x-2 my-2">
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="input input-bordered w-1/2"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered w-1/2"
                                />
                            </div>

                            {/* Address */}
                            <div className="flex space-x-2 my-2">
                                <input
                                    type="text"
                                    placeholder="Place"
                                    className="input input-bordered w-1/3"
                                />
                                <input
                                    type="text"
                                    placeholder="State"
                                    className="input input-bordered w-1/3"
                                />
                                <input
                                    type="number"
                                    placeholder="PIN Code"
                                    className="input input-bordered w-1/3"
                                    style={{
                                        appearance: 'none',
                                        MozAppearance: 'textfield',
                                    }}
                                />
                            </div>

                            {/* Qualification */}
                            <div className="flex space-x-2 my-2">
                                <select className="select select-bordered text-slate-500 w-1/2">
                                    <option disabled selected>
                                        Qualification
                                    </option>
                                    <option>B-Tech</option>
                                    <option>Degree</option>
                                    <option>Diploma</option>
                                </select>
                                <input
                                    type="text"
                                    placeholder="Branch"
                                    className="input input-bordered w-1/2"
                                />
                            </div>

                            {/* Other */}
                            <div className="flex space-x-2 my-2">
                                <select className="select w-1/2" disabled>
                                    <option>Role: Selected as Candidate</option>
                                </select>
                                <label className="form-control w-1/2">
                                    <input
                                        type="file"
                                        className="file-input file-input-bordered file-input-accent-content w-full"
                                    />
                                    <div className="label">
                                        <span className="label-text-alt text-slate-500">
                                            Select Resume
                                        </span>
                                    </div>
                                </label>
                            </div>

                            {/* Skills Section */}
                            <SkillsSection />

                            {/* Socials */}
                            <div className="flex space-x-2 my-2 mb-4">
                                <label className="input input-bordered flex items-center gap-2 w-1/3">
                                    <i className="fa-brands fa-sm fa-github" />
                                    <input
                                        type="text"
                                        className="grow text-sm"
                                        placeholder="Github Link"
                                    />
                                </label>
                                <label className="input input-bordered flex items-center gap-2 w-1/3">
                                    <i className="fa-brands fa-sm fa-x-twitter" />
                                    <input
                                        type="text"
                                        className="grow text-sm"
                                        placeholder="Twitter Link"
                                    />
                                </label>
                                <label className="input input-bordered flex items-center gap-2 w-1/3">
                                    <i className="fa-solid fa-sm fa-user-tie" />
                                    <input
                                        type="text"
                                        className="grow text-sm"
                                        placeholder="Portfolio Link"
                                    />
                                </label>
                            </div>

                            {/* Actions */}
                            <div className="flex space-x-2">
                                <Link to={'/cdashboard'}>
                                    <button className="btn btn-accent shadow">
                                        Save
                                    </button>
                                </Link>

                                <button onClick={toggleEdit} className="btn btn-error shadow">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CandidateProfile