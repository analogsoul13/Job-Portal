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
            <div className="hero bg-base-100 min-h-screen bg-authBg bg-cover bg-center fade-in">
                <div className="hero-content flex-col glass rounded-lg lg:flex-row-reverse">
                    {/* Text Section */}
                    <div className="w-full lg:w-1/2 flex items-center text-white p-8"
                        style={{ minHeight: "100%" }}>
                        <div className="text-center lg:text-left p-4 rounded-lg text-slate-700">
                            <h1 className="text-5xl font-bold">Register now for full experience!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <div className="form-control">
                                {
                                    authStatus ?
                                        <h1 className='text-center'>Login</h1>
                                        :
                                        <h1 className='text-center'>Register</h1>
                                }

                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
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


                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    {
                                        authStatus ?
                                            <div className='flex flex-row w-full justify-between'>
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
                            <div className="form-control mt-6">
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