import React from 'react'
import { Link } from 'react-router-dom'

function ProfileCard() {
    return (
        <>
            <div className='bg-base-100 rounded-xl sm:col-span-1 p-2'>
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

                {/* Options */}
                <div className='bg-base-200 mt-4 rounded-lg p-2'>
                    <ul className='text-sm font-semibold'>
                        <Link to={'/cdashboard'}>
                            <li className='p-2 hover:bg-base-100 cursor-pointer rounded-md'><i className="fa-solid fa-sm fa-house me-2" />Dashboard</li>
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
        </>
    )
}

export default ProfileCard