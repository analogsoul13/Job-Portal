import React from 'react'
import { useSelector } from 'react-redux';
import BASE_URL from '../../services/baseUrl';

function ProfileCard({ onOptionSelect, activeId }) {
    const options = [
        { id: 'dashboard', icon: 'fa-house', label: 'Dashboard' },
        { id: 'myapplications', icon: 'fa-list-check', label: 'My Applications' },
        { id: 'findjobs', icon: 'fa-briefcase', label: 'Find Jobs' },
        { id: 'myprofile', icon: 'fa-id-card-clip', label: 'My Profile' },

    ];

    const userInfo = useSelector((state) => state.auth.userInfo);
    const fullName = userInfo ? `${userInfo.first_name} ${userInfo.last_name}` : null;
    return (
        <>
            <div className='bg-base-100 rounded-xl shadow-xl sm:col-span-1 p-2'>
                <div className="rounded-t-lg h-32 overflow-hidden">
                    <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
                </div>
                <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                    <img className="object-cover object-center" src={`${BASE_URL}${userInfo?.profilePic}`} alt='Profile Picture' />
                </div>
                <div className="text-center mt-2">
                    <h2 className="font-semibold">{fullName}</h2>
                    <p className="text-gray-500">Freelance Web Designer</p>
                </div>

                {/* Options with Glassmorphism */}
                <div className='bg-base-200 flex-1 mt-4 rounded-xl p-3 shadow-inner border border-base-300'>
                    <ul className='text-sm font-semibold space-y-2'>
                        {options.map((option) => (
                            <li
                                key={option.id}
                                className={`group relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${activeId === option.id
                                        ? 'bg-neutral text-neutral-content shadow-lg scale-105 border-2 border-neutral'
                                        : 'bg-base-100 text-base-content shadow-md hover:shadow-lg hover:bg-base-300 border-2 border-base-300 hover:border-neutral/30'
                                    } px-4 py-3 min-h-12`}
                                onClick={() => onOptionSelect(option.id)}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${activeId === option.id
                                            ? 'bg-neutral-content/20 text-neutral-content'
                                            : 'bg-base-200 text-base-content/70 group-hover:bg-base-300 group-hover:text-base-content'
                                        }`}>
                                        <i className={`fa-solid ${option.icon} text-sm`} />
                                    </div>
                                    <span className="font-medium text-sm">{option.label}</span>
                                </div>

                                {/* Hover effect overlay */}
                                {activeId !== option.id && (
                                    <div className="absolute inset-0 bg-neutral/0 group-hover:bg-neutral/10 rounded-xl transition-all duration-300"></div>
                                )}
                            </li>
                        ))}

                        {/* Settings option */}
                        <li className='group relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer transform hover:scale-105 bg-base-100 text-base-content shadow-md hover:shadow-lg hover:bg-base-300 border-2 border-base-300 hover:border-neutral/30 px-4 py-3 min-h-12'>
                            <div className="flex items-center gap-3">
                                <div className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 bg-base-200 text-base-content/70 group-hover:bg-base-300 group-hover:text-base-content">
                                    <i className="fa-solid fa-sm fa-gear text-sm" />
                                </div>
                                <span className="font-medium text-sm">Settings</span>
                            </div>
                            <div className="absolute inset-0 bg-neutral/0 group-hover:bg-neutral/10 rounded-xl transition-all duration-300"></div>
                        </li>
                    </ul>
                </div>


            </div>
        </>
    )
}

export default ProfileCard