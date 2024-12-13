import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProfileCard from './Candidate/ProfileCard'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <>
            <div className="bg-base-100 navbar font-custom sm:px-6 ">
                < div className="navbar-start">
                    {/* Hamburger Icon for Profile Card */}
                    <div role="button" onClick={handleToggleMenu} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <a className="text-3xl btn btn-ghost">Talent <span className='text-accent'>Link</span></a>
                </div>
                {/* Navbar Center */}
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        <li><Link to={'/'}><i className="fa-solid fa-house" />Home</Link></li>
                        <li>
                            <details>
                                <summary><i className="fa-solid fa-magnifying-glass" />Browse</summary>
                                <ul className="p-2">
                                    <li><a><i className="fa-solid fa-briefcase" />Jobs</a></li>
                                    <li><a><i className="fa-solid fa-school" />Internships</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a><i className="fa-solid fa-layer-group" />About Us</a></li>
                        <li><Link to={'/auth'}><i className="fa-solid fa-user-plus" />Register</Link></li>
                    </ul>
                </div>
                {/* Theme Switch */}
                <div className="hidden me-6 sm:me-0">
                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller" value="dark" />

                        {/* sun icon */}
                        <i className="fa-solid swap-off fa-sun" />

                        {/* moon icon */}
                        <i className="fa-solid swap-on fa-moon" />
                    </label>
                </div>
                {/* Search and Profile icon */}
                <div className="navbar-end gap-2 ">
                    <div className="hidden form-control">
                        <input type="text" placeholder="Search" className="w-24 input input-bordered md:w-auto" />
                    </div>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-full h-full border-4 border-base-300 shadow-2xl rounded-full">
                                <img className='object-cover object-center'
                                    alt="Profile Picture"
                                    src="https://www.citimuzik.com/wp-content/uploads/2023/01/283208521_531376795134961_2948576342949021745_n-810x1013.jpg" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <Link to={'/candidateprofile'}>
                                    <a>Profile</a>
                                    <span className="badge badge-warning text-xs">Complete</span>
                                </Link>

                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                            {/* Theme Switch */}
                            <li>
                                <label className="swap swap-rotate">
                                    {/* this hidden checkbox controls the state */}
                                    <input type="checkbox" className="theme-controller" value="dark" />

                                    {/* sun icon */}
                                    <i className="fa-solid swap-off fa-sun" />

                                    {/* moon icon */}
                                    <i className="fa-solid swap-on fa-moon" />
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`fixed top-0 right-0 w-64 shadow h-full z-50 transition-transform duration-300 ease-in-out 
        ${isMenuOpen
                        ? 'translate-x-0'
                        : 'translate-x-full'}`}
            >
                <ProfileCard onClose={() => setIsMenuOpen(false)} />
            </div>
        </>
    )
}

export default Navbar