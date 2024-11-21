import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className="navbar bg-transparent font-custom bg-base-100 sm:px-6 ">
                <div className="navbar-start">
                    {/* Mobile */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
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
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to={'/'}><i className="fa-solid fa-house" />Home</Link></li>
                            <li>
                                <a>Browse</a>
                                <ul className="p-2">
                                    <li><a><i className="fa-solid fa-briefcase" />Jobs</a></li>
                                    <li><a><i className="fa-solid fa-school" />Internships</a></li>
                                </ul>
                            </li>
                            <li><Link to={'/auth'}>Register</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl">Talent Link</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
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
                <div className="navbar-end me-4 sm:me-0">
                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller" value="dark" />

                        {/* sun icon */}
                        <i className="fa-solid swap-off fa-sun" />

                        {/* moon icon */}
                        <i className="fa-solid swap-on fa-moon" />
                    </label>
                </div>
            </div>
        </>
    )
}

export default Navbar