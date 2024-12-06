import React from 'react';

function SideBar({ onOptionSelect }) {
    const options = [
        { id: 'dashboard', icon: 'fa-th-large', label: 'Dashboard' },
        { id: 'analytics', icon: 'fa-chart-bar', label: 'Analytics' },
        { id: 'candidates', icon: 'fa-users', label: 'Users' },
        { id: 'settings', icon: 'fa-gear', label: 'Settings' },
    ];

    return (
        <>
            <div className='bg-base-100 rounded-xl sm:col-span-1 p-2 w-full'>
                {/* Profile Picture */}
                <div className="mx-auto hidden lg:flex rounded-lg border-2 border-white overflow-hidden">
                    <img
                        className="object-cover  object-center"
                        src="https://ideogram.ai/assets/image/lossless/response/N7roOFL6SFSpJ6ayjUiHzQ"
                        alt="Profile Picture"
                    />
                </div>

                {/* Sidebar Options */}
                <div className='bg-base-300 h-full mt-4 rounded-lg p-2'>
                    <ul className="flex lg:flex-col flex-row space-x-4 lg:space-y-3 lg:space-x-0 items-center justify-center">
                        {options.map((option) => (
                            <li
                                key={option.id}
                                className="btn shadow bg-base-100 cursor-pointer"
                                onClick={() => onOptionSelect(option.id)} // Call parent function with the option ID
                            >
                                <i className={`fa-solid ${option.icon}`} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default SideBar;
