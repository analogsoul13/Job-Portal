import React from 'react'
import { useNavigate } from 'react-router-dom'

function Role() {

    const nav = useNavigate()

    // saving the role to local storage
    const setRole = (role) =>{
        localStorage.setItem('userRole', role)
    }

    // Role selection handling
    const handleRoleSelect = (role) => {
        setRole(role)
        if (role === 'Recruiter') {
            nav('/rdashboard')
        } else {
            nav('/cdashboard')
        }
    }
    return (
        <>
            <div className='flex flex-col mx-6 mb-10'>
                <h1 className='pb-4 text-xl font-bold text-center'>Choose Your Role</h1>
                <div className="grid gap-4 sm:grid-cols-2 fade-in">
                    {/* Candidate Card */}
                    <div className='flex flex-col justify-end rounded-lg bg-candidate bg-cover bg-center p-4 min-h-[450px] w-full'>
                        <div className='flex flex-col items-center justify-center p-4 space-y-2 glass h-1/3'>
                            <p className='text-slate-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, dolor?</p>
                            <button onClick={() => handleRoleSelect('Candidate')} className='btn btn-accent'>Candidate</button>

                        </div>
                    </div>
                    {/* Recruiter Card */}
                    <div className='flex flex-col justify-end rounded-lg bg-recruiter bg-cover bg-center p-4 min-h-[450px] w-full'>
                        <div className='flex flex-col items-center justify-center p-4 space-y-2 glass h-1/3'>
                            <p className='text-slate-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, rerum?</p>
                            <button onClick={() => handleRoleSelect('Recruiter')} className='btn btn-neutral'>Recruiter</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Role