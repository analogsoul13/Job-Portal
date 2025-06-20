import React from 'react'
import { useSelector } from 'react-redux';
import BASE_URL from '../../services/baseUrl';

function ProfileCard({ onOptionSelect, activeId}) {
    const options = [
        { id: 'dashboard', icon: 'fa-house', label:'Dashboard'},
        { id: 'myapplications', icon: 'fa-list-check', label:'My Applications'},
        { id: 'findjobs', icon: 'fa-briefcase', label:'Find Jobs'},
        { id: 'myprofile', icon: 'fa-id-card-clip', label:'My Profile'},

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

                {/* Options */}
                <div className='bg-base-200 mt-4 rounded-lg p-2'>
                    <ul className='text-sm font-semibold'>
                        {options.map((option) => (
                            <li
                                key={option.id}
                                className={`p-2 cursor-pointer rounded-md ${activeId === option.id ? 'bg-base-content text-base-100' : ''}`}
                                onClick={() => onOptionSelect(option.id)}
                            >
                                <i className={`fa-solid ${option.icon} me-2`} />
                                {option.label}
                            </li>
                        ))}

                        <li className='p-2 hover:bg-base-100 cursor-pointer rounded-md'><i className="fa-solid fa-sm fa-gear me-2" />Settings</li>
                    </ul>
                </div>


            </div>
        </>
    )
}

export default ProfileCard