import React from 'react'
import SkillsSection from './SkillsSection'
import { Link } from 'react-router-dom'

function CandidateProfile() {
    return (
        <>
            <div className='max-w-7xl mx-auto bg-base-300 border fade-in border-gray-200 shadow-2xl rounded-2xl p-2'>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">

                    {/* Right Profile */}
                    <div className='rounded-xl sm:col-span-3 p-4 bg-base-200'>
                        {/* Profile Picture */}
                        <div className="flex justify-center bg-base-300 p-2 mb-4">
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
                                <span className="text-slate-500 text-xs">Upload Profile Picture</span>
                            </label>
                        </div>
                        {/* Name */}
                        <div className="flex space-x-2">
                            <input type="text" placeholder="First Name" className="input input-bordered w-1/2" />
                            <input type="text" placeholder="Last Name" className="input input-bordered w-1/2" />
                        </div>
                        {/* Phone and Email */}
                        <div className="flex space-x-2 my-2">
                            <input type="text" placeholder="Phone" className="input input-bordered w-1/2" />
                            <input type="email" placeholder="Email" className="input input-bordered w-1/2" />
                        </div>
                        {/* Adress */}
                        <div className="flex space-x-2 my-2">
                            <input type="text" placeholder="Place" className="input input-bordered w-1/3" />
                            <input type="text" placeholder="State" className="input input-bordered w-1/3" />
                            <input type="number" placeholder="PIN Code" className="input input-bordered appearance-none w-1/3" style={{ appearance: 'none', MozAppearance: 'textfield' }} />
                        </div>
                        {/* Qualification */}
                        <div className="flex space-x-2 my-2">
                            <select className="select select-bordered text-slate-500 w-1/2">
                                <option disabled selected>Qualification</option>
                                <option>B-Tech</option>
                                <option>Degree</option>
                                <option>Diploma</option>
                            </select>
                            <input type="text" placeholder='Branch' className='input input-bordered w-1/2' />
                        </div>
                        {/* Other */}
                        <div className="flex space-x-2 my-2">
                            <select className="select w-1/2" disabled>
                                <option>Role : Selected as Candidate</option>
                            </select>
                            <label className="form-control w-1/2">
                                <input type="file" className="file-input file-input-bordered file-input-accent-content w-full" />
                                <div className="label">
                                    <span className="label-text-alt text-slate-500">Select Resume</span>
                                </div>
                            </label>
                        </div>
                        {/* Skills Section */}
                        <SkillsSection />
                        {/* Socials */}
                        <div className="flex space-x-2 my-2 mb-4">
                            <label className="input input-bordered flex items-center gap-2 w-1/3">
                                <i className="fa-brands fa-sm fa-github" />
                                <input type="text" className="grow text-sm" placeholder="Github Link" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 w-1/3">
                                <i className="fa-brands fa-sm fa-x-twitter" />
                                <input type="text" className="grow text-sm" placeholder="Twitter Link" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 w-1/3">
                                <i className="fa-solid fa-sm fa-user-tie" />
                                <input type="text" className="grow text-sm" placeholder="Portfolio Link" />
                            </label>
                        </div>
                        {/* Actions */}
                        <div className="flex space-x-2">
                            <Link to={'/cdashboard'}>
                                <button className='btn btn-accent shadow'>Save</button>
                            </Link>

                            <button className='btn btn-accent-content btn-outline shadow'>Edit</button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default CandidateProfile