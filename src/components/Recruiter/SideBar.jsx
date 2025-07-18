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
            <div className='bg-base-100 rounded-2xl shadow-lg border border-base-300 sm:col-span-1 p-4 w-full min-h-full flex flex-col'>
                {/* Profile Picture */}
                <div className="w-full hidden lg:flex lg:flex-col items-center rounded-xl border-2 p-4 border-base-300 overflow-hidden bg-base-200 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="relative group">
                        {userInfo?.profilePic ? (
                            <div className="relative">
                                <img
                                    className='w-full h-full object-cover object-center rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300'
                                    alt="Profile Picture"
                                    src={`${BASE_URL}${userInfo.profilePic}`}
                                />
                                {/* Glassmorphism overlay for name */}
                                <div className="absolute bottom-0 left-0 right-0 h-8 bg-base-100/20 backdrop-blur-md rounded-b-2xl border-t border-base-300/30 flex items-center justify-center">
                                    <h1 className='text-base-content text-xs font-semibold text-center drop-shadow-lg'>{fullName}</h1>
                                </div>
                            </div>
                        ) : (
                            <div className="relative">
                                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                                    <span className="text-primary-content font-bold text-2xl">
                                        {userInfo?.first_name?.[0]?.toUpperCase() || "U"}
                                    </span>
                                </div>
                                {/* Glassmorphism overlay for name */}
                                <div className="absolute bottom-0 left-0 right-0 h-8 bg-base-100/20 backdrop-blur-md rounded-b-2xl border-t border-base-300/30 flex items-center justify-center">
                                    <h1 className='text-base-content text-xs font-semibold text-center drop-shadow-lg'>{fullName}</h1>
                                </div>
                            </div>
                        )}
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-base-100 shadow-sm animate-pulse"></div>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-3">
                        <p className='text-sm text-base-content/70 font-medium'>Recruiter</p>
                    </div>
                </div>

                {/* Sidebar Options */}
                <div className='bg-base-200 flex-1 mt-4 rounded-xl p-3 shadow-inner border border-base-300'>
                    <ul className="flex lg:flex-col flex-row gap-2 lg:gap-3 items-stretch justify-center h-full">
                        {options.map((option) => (
                            <li
                                key={option.id}
                                className={`group relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${activeId === option.id
                                        ? 'bg-neutral text-neutral-content shadow-lg scale-105 border-2 border-neutral'
                                        : 'bg-base-100 text-base-content shadow-md hover:shadow-lg hover:bg-base-300 border-2 border-base-300 hover:border-neutral/30'
                                    } lg:w-full w-12 px-3 py-3 lg:px-4 lg:py-3 flex-1 lg:flex-none min-h-12 lg:min-h-14`}
                                onClick={() => onOptionSelect(option.id)}
                            >
                                <div className="flex items-center gap-3 justify-center lg:justify-start">
                                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${activeId === option.id
                                            ? 'bg-neutral-content/20 text-neutral-content'
                                            : 'bg-base-200 text-base-content/70 group-hover:bg-base-300 group-hover:text-base-content'
                                        }`}>
                                        <i className={`fa-solid ${option.icon} text-sm`} />
                                    </div>
                                    <span className='hidden lg:flex font-medium text-sm'>{option.label}</span>
                                </div>

                                {/* Hover effect overlay */}
                                {activeId !== option.id && (
                                    <div className="absolute inset-0 bg-neutral/0 group-hover:bg-neutral/10 rounded-xl transition-all duration-300"></div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default SideBar;