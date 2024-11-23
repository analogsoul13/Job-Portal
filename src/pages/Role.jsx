import React from 'react'

function Role() {
    return (
        <>
            <div className='flex flex-col mx-6 mb-10'>
                <h1 className='text-center text-xl font-bold pb-4'>Choose Your Role</h1>
                <div className="grid sm:grid-cols-2 gap-4 fade-in">
                    {/* Candidate Card */}
                    <div className='flex flex-col justify-end rounded-lg bg-candidate bg-cover bg-center p-4 min-h-[450px] w-full'>
                        <div className='flex flex-col justify-center items-center space-y-2 p-4 glass h-1/3'>
                            <p className='text-slate-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, dolor?</p>
                            <button className='btn btn-accent'>Candidate</button>
                        </div>
                    </div>
                    {/* Recruiter Card */}
                    <div className='flex flex-col justify-end rounded-lg bg-recruiter bg-cover bg-center p-4 min-h-[450px] w-full'>
                        <div className='flex flex-col justify-center items-center space-y-2 p-4 glass h-1/3'>
                            <p className='text-slate-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, rerum?</p>
                            <button className='btn btn-neutral'>Recruiter</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Role