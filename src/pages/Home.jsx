import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const userRole = useSelector((state) => state.auth.userRole)
    const dispatch = useDispatch()
    const nav = useNavigate()

    const handleButtonClick = () => {
        if (isLoggedIn) {
            if (userRole === 'candidate') {
                nav("/cdashboard")
            } else if (userRole === 'recruiter') {
                nav("/rdashboard")
            }
        } else {
            nav("/auth")
        }
    }
    return (
        <>
            <div className='w-full overflow-hidden'>
                <div className='grid sm:grid-cols-2 px-2 sm:px-6'>
                    <div className='flex flex-col justify-end md:justify-center md:bg-none bg-home rounded-lg bg-cover bg-center mt-0 md:p-6 shadow-xl md:shadow-none sm:mt-14 gap-4 items-start w-full h-[500px]'>
                        {/* Mobile Screen */}
                        <div className=' md:hidden flex flex-col space-y-2 rounded-b-lg justify-center items-start px-2 py-2'>
                            <h1 className='text-2xl md:text-5xl font-bold slide-in'><span className='text-accent'>Connecting Talent</span> <br /> With <span className='text-gray-50'>Opportunities</span></h1>
                            <p className='font-thin glass text-gray-50 text-xs md:text-lg slide-in rounded-lg p-2'>We bridge the gap between ambition and achievement. Find opportunities that align with your goals or hire talent to elevate your business.</p>

                            <button onClick={handleButtonClick} className='btn shadow-2xl btn-accent md:btn-outline slide-in'>{isLoggedIn ? "Dashboard" : "Register"}</button>
                        </div>

                        {/* Large Screen */}
                        <div className='relative z-10 hidden md:flex flex-col justify-center items-start px-8 py-4 space-y-6'>
                            <div className="relative">
                                <h1 className='text-6xl font-bold slide-in leading-tight tracking-tight'>
                                    <span className='text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent'>
                                        Connecting Talent
                                    </span>
                                    <br />
                                    <span className='text-base-content'>With</span>
                                    <br />
                                    <span className='text-base-content'>Opportunities</span>
                                </h1>
                                {/* Enhanced accent elements */}
                                <div className="absolute -bottom-4 left-0 w-24 h-1.5 bg-gradient-to-r from-accent to-accent/60 rounded-full"></div>
                                <div className="absolute -bottom-2 left-6 w-16 h-0.5 bg-accent/40 rounded-full"></div>
                            </div>

                            <div className="relative">
                                <p className='font-light text-base-content text-lg leading-relaxed slide-in max-w-md'>
                                    We bridge the gap between ambition and achievement. Find opportunities that align with your goals or hire talent to elevate your business.
                                </p>
                                {/* Subtle side accent */}
                                <div className="absolute -left-4 top-2 w-0.5 h-16 bg-gradient-to-b from-accent/60 to-transparent rounded-full"></div>
                            </div>

                            <button
                                onClick={handleButtonClick}
                                className='group btn shadow-xl hover:shadow-2xl bg-gray-800 hover:bg-gray-900 text-white border-0 rounded-xl px-10 py-4 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out slide-in'
                            >
                                <span className="relative z-10">{isLoggedIn ? "Dashboard" : "Dive In"}</span>
                                <svg className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                {/* Button glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-blue-200/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>


                    </div>
                    <div className='hidden md:flex justify-center sm:my-10 overflow-hidden bg-blue-100 rounded-3xl items-center w-full h-[550px]'>
                        <img className='fade-in w-full h-full object-center object-cover' src="https://i.pinimg.com/originals/63/0d/59/630d59a4d2c80c1d8ab2503b69a4a421.png" alt="" />

                    </div>
                </div>
                {/* Featured Jobs */}
                <div className='flex flex-col justify-center mt-6 items-center p-2'>
                    <h1 className='text-2xl font-bold'>Featured Jobs</h1>
                    <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-4 sm:px-6'>
                        {/* Card */}
                        <div className='card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-base-300' data-aos="fade-right">
                            <div className="card-body p-6">
                                <div className='flex justify-between items-start mb-4'>
                                    <div className='flex items-center space-x-3'>
                                        <div className='w-12 h-12 rounded-full overflow-hidden shadow-lg'>
                                            <img className='w-full h-full object-cover' src="https://e7.pngegg.com/pngimages/882/225/png-clipart-google-logo-google-logo-google-search-icon-google-text-logo.png" alt="Google" />
                                        </div>
                                        <div>
                                            <h4 className='font-semibold text-base-content'>Google LLM</h4>
                                        </div>
                                    </div>
                                    <div className="badge badge-warning text-slate-100 text-xs font-medium">Featured</div>
                                </div>

                                <h2 className="card-title text-xl mb-4 text-base-content">MERN Stack Developer</h2>

                                <div className='grid grid-cols-1 gap-2 mb-4'>
                                    <div className='flex items-center space-x-2'>
                                        <i className="fa-solid fa-location-dot text-accent" />
                                        <span className='text-sm text-slate-500'>Mumbai</span>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <i className="fa-solid fa-clock text-accent" />
                                        <span className='text-sm text-slate-500'>Full-Time</span>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <i className="fa-solid fa-sack-dollar text-accent" />
                                        <span className='text-sm text-slate-500 font-semibold'>45LPA</span>
                                    </div>
                                </div>

                                <div className='mb-6'>
                                    <h3 className='text-sm font-semibold text-slate-600 mb-2'>Job Description</h3>
                                    <p className='text-xs text-slate-500 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, incidunt!</p>
                                </div>

                                <div className='card-actions'>
                                    <button className='btn btn-accent text-slate-50 w-full hover:shadow-xl transition-all duration-300'>
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Card */}
                        <div className='card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-base-300' data-aos="fade-in">
                            <div className="card-body p-6">
                                <div className='flex justify-between items-start mb-4'>
                                    <div className='flex items-center space-x-3'>
                                        <div className='w-12 h-12 rounded-full overflow-hidden shadow-lg'>
                                            <img className='w-full h-full object-cover' src="https://iconape.com/wp-content/png_logo_vector/amazon-icon.png" alt="Amazon" />
                                        </div>
                                        <div>
                                            <h4 className='font-semibold text-base-content'>Amazon</h4>
                                        </div>
                                    </div>
                                    <div className="badge badge-warning text-slate-100 text-xs font-medium">Featured</div>
                                </div>

                                <h2 className="card-title text-xl mb-4 text-base-content">MERN Stack Developer</h2>

                                <div className='grid grid-cols-1 gap-2 mb-4'>
                                    <div className='flex items-center space-x-2'>
                                        <i className="fa-solid fa-location-dot text-accent" />
                                        <span className='text-sm text-slate-500'>Mumbai</span>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <i className="fa-solid fa-clock text-accent" />
                                        <span className='text-sm text-slate-500'>Full-Time</span>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <i className="fa-solid fa-sack-dollar text-accent" />
                                        <span className='text-sm text-slate-500 font-semibold'>45LPA</span>
                                    </div>
                                </div>

                                <div className='mb-6'>
                                    <h3 className='text-sm font-semibold text-slate-600 mb-2'>Job Description</h3>
                                    <p className='text-xs text-slate-500 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, incidunt!</p>
                                </div>

                                <div className='card-actions'>
                                    <button className='btn btn-accent text-slate-50 w-full hover:shadow-xl transition-all duration-300'>
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Card */}
                        <div className='card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-base-300' data-aos="fade-left">
                            <div className="card-body p-6">
                                <div className='flex justify-between items-start mb-4'>
                                    <div className='flex items-center space-x-3'>
                                        <div className='w-12 h-12 rounded-full overflow-hidden shadow-lg'>
                                            <img className='w-full h-full object-cover' src="https://shreecomputers.co.in/wp-content/uploads/2020/12/microsoft-icon-logo--1024x1024.png" alt="Microsoft" />
                                        </div>
                                        <div>
                                            <h4 className='font-semibold text-base-content'>Microsoft</h4>
                                        </div>
                                    </div>
                                    <div className="badge badge-warning text-slate-100 text-xs font-medium">Featured</div>
                                </div>

                                <h2 className="card-title text-xl mb-4 text-base-content">MERN Stack Developer</h2>

                                <div className='grid grid-cols-1 gap-2 mb-4'>
                                    <div className='flex items-center space-x-2'>
                                        <i className="fa-solid fa-location-dot text-accent" />
                                        <span className='text-sm text-slate-500'>Mumbai</span>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <i className="fa-solid fa-clock text-accent" />
                                        <span className='text-sm text-slate-500'>Full-Time</span>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <i className="fa-solid fa-sack-dollar text-accent" />
                                        <span className='text-sm text-slate-500 font-semibold'>45LPA</span>
                                    </div>
                                </div>

                                <div className='mb-6'>
                                    <h3 className='text-sm font-semibold text-slate-600 mb-2'>Job Description</h3>
                                    <p className='text-xs text-slate-500 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, incidunt!</p>
                                </div>

                                <div className='card-actions'>
                                    <button className='btn btn-accent text-slate-50 w-full hover:shadow-xl transition-all duration-300'>
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                {/* What we offer */}
                <div className='flex flex-col justify-center space-y-4 mt-4 items-center p-2'>
                    <h1 className='text-2xl font-bold my-4'>Why choose us?</h1>
                    <div className="grid sm:grid-cols-2 w-full sm:px-6 opacity-0" data-aos="fade-up">
                        <div className='flex justify-center rounded-lg sm:rounded-l-lg items-center bg-offerCover bg-cover bg-center w-full h-[400px]'>
                            <h1 className='text-4xl text-center text-slate-200 mt-4 font-bold'>Wide Range of Opportunities</h1>
                        </div>
                        <div className='hidden sm:flex items-center rounded-r-lg w-full h-full'>
                            <h1 className='text-5xl ml-14 font-bold'>Endless <br /> <span className='text-accent'>Possibilities</span> <br /> To grow and thrive <br /> In your career</h1>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 w-full sm:px-6 opacity-0" data-aos="fade-up">
                        <div className='flex items-center space-x-4 p-4 justify-center rounded-r-lg w-full h-full'>
                            <img className='w-20 h-20' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/1200px-Facebook_logo_36x36.svg.png" alt="" />
                            <img className='w-20 h-20' src="https://1.bp.blogspot.com/-ppT3QD3BNZE/UM4I0O0cNWI/AAAAAAAABlw/7TUyyAgsCYo/s1600/apple+logo.png" alt="" />
                            <img className='w-20 h-20' src="https://codekiste.com/wp-content/uploads/amazon_logo-400x400.png" alt="" />
                            <img className='w-20 h-20' src="https://static.vecteezy.com/system/resources/previews/017/396/814/original/netflix-mobile-application-logo-free-png.png" alt="" />
                            <img className='w-20 h-20' src="http://pluspng.com/img-png/google-logo-png-open-2000.png" alt="" />
                        </div>
                        <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
                            <div className='absolute inset-0 bg-offerCover2 bg-cover bg-center'></div>
                            <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                            <div className='relative z-10 flex justify-center items-center h-[400px] p-8'>
                                <h3 className='text-3xl lg:text-4xl text-center text-slate-100 font-bold leading-tight'>
                                    Employer<br />Partnerships
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div >


        </>
    )
}

export default Home