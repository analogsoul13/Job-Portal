import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProfileCard from './Candidate/ProfileCard'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/slices/authSlice'
import { toast } from 'react-toastify'

function Navbar({ onOptionSelect, activeId }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    // For user is logged in or not
    const { isLoggedIn, userRole } = useSelector((state) => state.auth)
    const nav = useNavigate()
    const dispatch = useDispatch()

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleLogout = () => {
        dispatch(logout()) // Dispatch logout action
        // Clear user data from localStorage
        localStorage.removeItem("role");
        localStorage.removeItem("token");
        nav('/')
        toast.warning("Logged out Succesfully!")
        setIsMenuOpen(false)
    }

    const handleOptionSelect = (id) => {
        onOptionSelect(id) // Update active section in CandidateDashboard
        setIsMenuOpen(false) // Close the sidebar
    }

    return (
        <>
            <div className="bg-base-100 navbar font-custom sm:px-6 ">
                < div className="navbar-start">
                    {/* Hamburger Icon for Profile Card */}
                    {isLoggedIn && (
                        <div role="button" onClick={handleToggleMenu} className="btn btn-ghost lg:hidden">
                            <i className="fa-solid fa-tornado" />
                        </div>
                    )}

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
                <div className=" me-6 sm:me-0">
                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller" value="dark" />

                        {/* sun icon */}
                        <i className="fa-solid swap-off fa-sun" />

                        {/* moon icon */}
                        <i className="fa-solid swap-on fa-moon" />
                    </label>
                </div>

                {/* Profile Icon (visible only when logged in) */}
                    <div className="navbar-end gap-2 ">
                        {isLoggedIn ? (
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
                            <li onClick={handleLogout}><a>Logout</a></li>

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
                        ):(
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="w-24 input input-bordered md:w-auto" />
                        </div>
                        
                        )}

                    </div>
            </div>
            {/* Mobile Sidebar (visible only when logged in) */}
            {isLoggedIn && (
                <div className={`fixed md:hidden top-0 right-0 w-64 shadow h-full z-50 transition-transform duration-300 ease-in-out 
                ${isMenuOpen
                        ? 'translate-x-0'
                        : 'translate-x-full'}`}
                >
                    <ProfileCard onOptionSelect={handleOptionSelect}
                        activeId={activeId} />
                </div>
            )}


        </>
    )
}

export default Navbar