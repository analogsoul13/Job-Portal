import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProfileCard from './Candidate/ProfileCard'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/slices/authSlice'
import { toast } from 'react-toastify'
import BASE_URL from '../services/baseUrl'
import { persistor } from '../redux/store'

function Navbar({ onOptionSelect, activeId }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showPopup, setShowPopup] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { isLoggedIn, userRole, userInfo } = useSelector((state) => state.auth)
    const userName = userInfo?.first_name
    const nav = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    const handleLogout = () => {
        dispatch(logout());
        persistor.purge()
        localStorage.clear();
        nav('/');
        toast.warning("Logged out Successfully!");
        setShowPopup(false);
        setIsMenuOpen(false);
    };

    const handleCancel = () => {
        setShowPopup(false)
    };


    const handleOptionSelect = (id) => {
        onOptionSelect(id) // Update active section in CandidateDashboard
        setIsMenuOpen(false) // Close the sidebar
    };

    return (
        <>
            <div className={`bg-base-100 navbar font-custom sm:px-6 sticky top-0 z-40 backdrop-blur-md transition-shadow ${scrolled ? 'shadow-md' : 'shadow-none'}`}>
                < div className="navbar-start">
                    {/* Hamburger Icon for Profile Card */}
                    {isLoggedIn && (
                        <div role="button" onClick={handleToggleMenu} className="btn btn-ghost lg:hidden">
                            <i className="fa-solid fa-tornado" />
                        </div>
                    )}

                    <a href='/' className="text-3xl btn btn-ghost">Talent <span className='text-accent'>Link</span></a>
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
                        {isLoggedIn ? (
                            <li><a><i className="fa-solid fa-web-awesome text-yellow-500" /><span className='font-bold text-base-content'>{userName}</span></a></li>
                        ) : (
                            <li><Link to={'/auth'}><i className="fa-solid fa-user-plus" />Register</Link></li>
                        )}

                    </ul>
                </div>
                {/* Theme Switch */}
                <div className=" sm:flex ms-14 me-6 sm:me-0">
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
                                <div className="w-full h-full border-2 border-base-300 shadow-2xl rounded-full">
                                    {userInfo?.profilePic ? (
                                        <img className='object-cover object-center'
                                            alt="Profile Picture"
                                            src={`${BASE_URL}${userInfo.profilePic}`} />
                                    ) : (
                                        <span>{userInfo?.first_name?.[0]?.toUpperCase() || "U"}</span>
                                    )
                                    }
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <button
                                        onClick={() => {
                                            if (userRole === "candidate") {
                                                nav("/cdashboard");
                                                onOptionSelect("myprofile"); // Set "My Profile" as the active section
                                            } else if (userRole === "recruiter") {
                                                nav("/rdashboard");
                                                onOptionSelect("settings"); // Set "My Profile" as the active section
                                            }
                                        }}
                                    >
                                        Profile
                                        <span className="badge badge-warning text-xs">Complete</span>
                                    </button>

                                </li>
                                <li><a>Settings</a></li>
                                <li><button onClick={() => setShowPopup(true)}>Logout</button></li>

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
                    ) : (
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="w-24 input input-bordered md:w-auto" />
                        </div>

                    )}

                </div>
            </div>

            {/* Popup for logout */}
            {
                showPopup && (
                    <div className="fixed inset-0 flex fade-in items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-base-100 rounded-lg shadow-lg p-6 w-96">
                            <h3 className="text-lg mb-4">Confirm Logout</h3>
                            <p className="text-base-content mb-6">
                                Are you sure you want to log out?
                            </p>
                            <div className="flex justify-end gap-4">
                                <button
                                    onClick={handleCancel}
                                    className="btn btn-neutral text-xs"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="btn btn-error text-xs text-base-300"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>

                )
            }


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