import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Auth() {
    const [authStatus, setAuthStatus] = useState(false)

    const changeAuth = () => {
        setAuthStatus(!authStatus)
    }

    return (
        <>
            <div className="min-h-screen bg-center bg-cover hero bg-base-100 bg-authBg fade-in">
                <div className="flex-col rounded-lg hero-content md:h-[600px] glass md:flex-row-reverse">
                    {/* Text Section */}
                    <div className="flex items-center w-full p-8 text-white lg:w-1/2"
                        style={{ minHeight: "100%" }}>
                        <div className="p-4 text-center rounded-lg lg:text-left text-slate-700">
                            <h1 className="text-5xl font-bold">Register now for full experience!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                    </div>
                    <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
                        <div className="card-body">
                            <div className="form-control">
                                {
                                    authStatus ?
                                        <h1 className='text-center'>Login</h1>
                                        :
                                        <h1 className='text-center'>Register</h1>
                                }

                                <label className="input input-bordered mt-2 flex items-center gap-2">
                                    <i className="fa-solid fa-envelope" />
                                    <input type="text" className="grow" placeholder="Email" />
                                </label>
                            </div>
                            <div className="form-control">
                                {
                                    !authStatus && (
                                        <>
                                            {/* Name */}
                                            <label className="label">
                                                <span className="label-text">First Name</span>
                                            </label>
                                            <input type="text" placeholder="First Name" className="input input-bordered" required aria-label='First Name' />
                                            {/* Name */}
                                            <label className="label">
                                                <span className="label-text" aria-label='Last Name'>Last Name</span>
                                            </label>
                                            <input type="text" placeholder="Last Name" className="input input-bordered" required />
                                        </>
                                    )
                                }


                                <label className="input input-bordered flex items-center gap-2 mt-4">
                                    <i className="fa-solid fa-sm fa-key" />
                                    <input type="password" placeholder="Password" className="grow" required />
                                </label>
                                
                                <label className="label">
                                    {
                                        authStatus ?
                                            <div className='flex flex-row justify-between w-full'>
                                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                <a href="#" onClick={changeAuth} className="label-text-alt link link-hover">New User?</a>
                                            </div>

                                            :
                                            <div>
                                                <a href="#" onClick={changeAuth} className="label-text-alt link link-hover">Existing user ?</a>
                                            </div>

                                    }

                                </label>
                            </div>
                            <div className="mt-6 form-control">
                                {
                                    authStatus ?
                                        <Link to={'/role'}>
                                            <button className="btn btn-accent">Login</button>
                                        </Link>

                                        :
                                        <button className="btn btn-accent">Register</button>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth