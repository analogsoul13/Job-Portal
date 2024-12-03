import React from 'react'
import SkillsSection from './SkillsSection'
import { Link } from 'react-router-dom'

function CandidateProfile() {
    return (
        <>
            <div className='max-w-7xl mx-auto border fade-in border-gray-200 shadow-2xl rounded-2xl my-4 p-2'>
                <h1 className='text-2xl text-center font-semibold py-3'>Complete Your Profile</h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {/* Left Profile */}
                    <div className='bg-base-200 rounded-xl sm:col-span-1 p-4'>
                        <div className="rounded-t-lg h-32 overflow-hidden">
                            <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
                        </div>
                        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                            <img className="object-cover object-center" src='https://www.citimuzik.com/wp-content/uploads/2023/01/283208521_531376795134961_2948576342949021745_n-810x1013.jpg' alt='Profile Picture' />
                        </div>
                        <div className="text-center mt-2">
                            <h2 className="font-semibold">Anne Hathaway</h2>
                            <p className="text-gray-500">Freelance Web Designer</p>
                        </div>
                        <div className='bg-base-300 mt-4 rounded-lg p-2'>
                            <ul className='text-sm font-semibold'>
                                <Link to={'/cdashboard'}>
                                    <li className='p-2 hover:bg-base-100 cursor-pointer rounded-md'><i className="fa-solid fa-sm fa-house me-2" />Home</li>
                                </Link>
                                <Link to={'/jobs'}>
                                    <li className='p-2 hover:bg-base-100 cursor-pointer rounded-md'><i className="fa-solid fa-sm fa-briefcase me-2" />Jobs</li>
                                </Link>
                                <Link to={'/candidateprofile'}>
                                    <li className='p-2 hover:bg-base-100 cursor-pointer rounded-md'><i className="fa-solid fa-sm fa-id-card-clip me-2" />Profile</li>
                                </Link>

                                <li className='p-2 hover:bg-base-100 cursor-pointer rounded-md'><i className="fa-solid fa-sm fa-list-check me-2" />My Applications</li>
                                <li className='p-2 hover:bg-base-100 cursor-pointer rounded-md'><i className="fa-solid fa-sm fa-gear me-2" />Settings</li>
                            </ul>
                        </div>


                    </div>
                    {/* Right Profile */}
                    <div className='rounded-xl sm:col-span-2 p-4 bg-base-200'>
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