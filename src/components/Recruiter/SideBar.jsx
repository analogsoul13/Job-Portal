import React from 'react';
import { useSelector } from 'react-redux';
import BASE_URL from '../../services/baseUrl';

function SideBar({ onOptionSelect, activeId }) {
    const userInfo = useSelector((state) => state.auth.userInfo);
    const fullName = userInfo ? `${userInfo.first_name} ${userInfo.last_name}` : null;
    const options = [
        { id: 'dashboard', icon: 'fa-th-large', label: 'Dashboard' },
        { id: 'analytics', icon: 'fa-chart-bar', label: 'Analytics' },
        { id: 'candidates', icon: 'fa-users', label: 'Users' },
        { id: 'managejobs', icon: 'fa-briefcase', label: 'Manage Jobs' },
        { id: 'settings', icon: 'fa-gear', label: 'Settings' },
    ];

    return (
        <>
            <div className='bg-base-100 rounded-xl sm:col-span-1 p-2 w-full'>
                {/* Profile Picture */}
                <div className="mx-auto hidden lg:flex lg:flex-col items-center rounded-lg border-2 p-4 border-base-300 overflow-hidden">
                    {userInfo?.profilePic ? (
                        <img className='object-cover object-center rounded-lg'
                            alt="Profile Picture"
                            src={`${BASE_URL}${userInfo.profilePic}`} />
                    ) : (
                        <span>{userInfo?.first_name?.[0]?.toUpperCase() || "U"}</span>
                    )
                    }
                    <h1 className='mt-2 text-base-content text-lg'>{fullName}</h1>
                    <div className="flex items-center justify-center gap-2">
                        <p className='text-xs'>Recruiter</p>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                </div>

                {/* Sidebar Options */}
                <div className='bg-base-300 h-full mt-4 rounded-lg p-2'>
                    <ul className="flex lg:flex-col flex-row space-x-4 lg:space-y-3 lg:space-x-0 items-center justify-center">
                        {options.map((option) => (
                            <li
                                key={option.id}
                                className={`btn shadow bg-base-100 lg:w-full  ${activeId === option.id ? 'bg-base-content text-base-100' : ''}`}
                                onClick={() => onOptionSelect(option.id)} // Call parent function with the option ID
                            >
                                <i className={`fa-solid ${option.icon}`} /> <span className='hidden lg:flex'>{option.label}</span>
                            </li>
                        ))}
                        {/* <li className="btn shadow bg-base-100 cursor-pointer">
                            <Link to='/recruiterprofile'>
                                <i className="fa-solid fa-user-pen" />
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default SideBar;
