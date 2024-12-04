import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className=''>
                <div className='grid sm:grid-cols-2 px-2 sm:px-6'>
                    <div className='flex flex-col justify-center p-6 sm:mt-14 gap-6 items-start w-full h-[450px]'>
                        <h1 className='text-5xl font-bold slide-in'><span className='text-accent'>Connecting Talent</span> <br /> With <span>Opportunites</span></h1>
                        <p className='font-thin slide-in md:bg-transparent bg-slate-100 bg-opacity-75 rounded-lg shadow md:shadow-none p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eligendi. Corrupti tempora, ipsa saepe nostrum quod earum nulla quisquam hic.</p>
                        <Link to={'/auth'}>
                            <button className='btn shadow-2xl btn-neutral md:btn-outline slide-in'>Register</button>
                        </Link>
                    </div>
                    <div className='flex justify-center sm:my-10 overflow-hidden shadow-xl bg-blue-100 rounded-3xl items-center w-full h-[550px]'>
                        <img className='fade-in w-full h-full object-center object-cover' src="https://ideogram.ai/assets/image/lossless/response/pfsXsv5WScGeatbtCgrSXg" alt="" />

                    </div>
                </div>
                {/* Featured Jobs */}
                <div className='flex flex-col justify-center mt-6 items-center p-2'>
                    <h1 className='text-2xl font-bold'>Featured Jobs</h1>
                    <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-4 sm:px-6'>
                        {/* Card */}
                        <div className='card rounded-lg shadow hover:shadow-lg overflow-hidden w-[400px] h-full opacity-0' data-aos="fade-right">
                            <div className="card-body">
                                <div className='flex justify-between'>
                                    <img className='rounded-full h-6 w-6' src="https://e7.pngegg.com/pngimages/882/225/png-clipart-google-logo-google-logo-google-search-icon-google-text-logo.png" alt="" />
                                    <div className="badge badge-warning text-slate-100 text-xs">Featured</div>
                                </div>

                                <h4>Google LLM</h4>
                                <h2 className="card-title text-slate-700">MERN Stack Developer</h2>
                                <div className='flex justify-between'>
                                    <p className='text-xs text-slate-500'><i className="fa-solid fa-location-dot me-2" />Mumbai</p>
                                    <p className='text-xs text-slate-500'><i className="fa-solid fa-clock me-2" />Full-Time</p>
                                    <p className='text-xs text-slate-500'><i className="fa-solid fa-sack-dollar me-2" />45LPA</p>
                                </div>
                                <div>
                                    <h3 className='text-sm text-slate-600'>Job Description</h3>
                                    <p className='text-xs text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, incidunt!</p>
                                </div>
                                <div>
                                    <button className='btn hover:shadow-xl btn-accent text-slate-50'>Apply Now</button>
                                </div>


                            </div>
                        </div>
                        {/* Card */}
                        <div className='card rounded-lg shadow slide-in hover:shadow-lg overflow-hidden w-[400px] h-full'>
                            <div className="card-body">
                                <div className='flex justify-between'>
                                    <img className='rounded-full h-6 w-6' src="https://iconape.com/wp-content/png_logo_vector/amazon-icon.png" alt="" />
                                    <div className="badge badge-warning text-slate-100 text-xs">Featured</div>
                                </div>

                                <h4>Amazon</h4>
                                <h2 className="card-title text-slate-700">MERN Stack Developer</h2>
                                <div className='flex justify-between'>
                                    <p className='text-xs text-slate-500'><i className="fa-solid fa-location-dot me-2" />Mumbai</p>
                                    <p className='text-xs text-slate-500'><i className="fa-solid fa-clock me-2" />Full-Time</p>
                                    <p className='text-xs text-slate-500'><i className="fa-solid fa-sack-dollar me-2" />45LPA</p>
                                </div>
                                <div>
                                    <h3 className='text-sm text-slate-600'>Job Description</h3>
                                    <p className='text-xs text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, incidunt!</p>
                                </div>
                                <div>
                                    <button className='btn hover:shadow-xl btn-accent text-slate-50'>Apply Now</button>
                                </div>


                            </div>
                        </div>
                        {/* Card */}
                        <div className='card rounded-lg shadow hover:shadow-lg overflow-hidden w-[400px] h-full opacity-0' data-aos="fade-left">
                            <div className="card-body">
                                <div className='flex justify-between'>
                                    <img className='rounded-full h-6 w-6' src="https://shreecomputers.co.in/wp-content/uploads/2020/12/microsoft-icon-logo--1024x1024.png" alt="" />
                                    <div className="badge badge-warning text-slate-100 text-xs">Featured</div>
                                </div>

                                <h4>Microsoft</h4>
                                <h2 className="card-title text-slate-700">MERN Stack Developer</h2>
                                <div className='flex justify-between'>
                                    <p className='text-xs text-slate-500'><i className="fa-solid fa-location-dot me-2" />Mumbai</p>
                                    <p className='text-xs text-slate-500'><i className="fa-solid fa-clock me-2" />Full-Time</p>
                                    <p className='text-xs text-slate-500'><i className="fa-solid fa-sack-dollar me-2" />45LPA</p>
                                </div>
                                <div>
                                    <h3 className='text-sm text-slate-600'>Job Description</h3>
                                    <p className='text-xs text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, incidunt!</p>
                                </div>
                                <div>
                                    <button className='btn hover:shadow-xl btn-accent text-slate-50'>Apply Now</button>
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
                        <div className='flex justify-center rounded-lg sm:rounded-l-lg items-center bg-offerCover2 bg-cover bg-center w-full h-[400px]'>
                            <h1 className='text-4xl text-center text-slate-100 mt-4 font-bold'>Employer Partnerships</h1>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Home