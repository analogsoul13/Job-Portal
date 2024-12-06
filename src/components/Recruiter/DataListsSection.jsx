import React from 'react'

function DataListsSection() {
    return (
        <>
            {/* Search */}
            <div className='bg-base-100 rounded-lg p-4'>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>
            {/* Applicants */}
            <div className="hidden lg:flex flex-col space-y-4">
                {/* Candidate */}
                <div className="card bg-base-100 w-full shadow-xl">
                    <div className="card-body">
                        <div className='flex justify-center items-center bg-base-200 p-2 rounded-lg'>
                            <img className='w-24 h-24 rounded-full' src="https://img.freepik.com/premium-photo/portrait-young-boy-professional-look_785361-73.jpg" alt="" />
                            <div className='flex flex-col justify-center p-4 items-center'>
                                <h2 className="card-title">Karthik Paul</h2>
                                <p className='text-sm text-slate-500'>Software Engineer</p>
                            </div>

                        </div>
                        <div className='flex space-x-3 text-sm text-base-content'>
                            <span className='p-2 w-14 bg-base-200 rounded-lg'>React</span>
                            <span className='p-2 bg-base-200 rounded-lg'>Node Js</span>
                        </div>

                        <div className="card-actions text-sm text-primary justify-end">
                            <p>Application Received</p>
                            <button>View</button>
                        </div>
                    </div>
                </div>
                {/* Candidate */}
                <div className="card bg-base-100 w-full shadow-xl">
                    <div className="card-body">
                        <div className='flex justify-center items-center bg-base-200 p-2 rounded-lg'>
                            <img className='w-24 h-24 rounded-full' src="https://i.pinimg.com/736x/ab/25/0a/ab250a6ee50aeaf82e6ff9d3caf2af6a.jpg" alt="" />
                            <div className='flex flex-col justify-center p-4 items-center'>
                                <h2 className="card-title">Roronoa Zoro</h2>
                                <p className='text-sm text-slate-500'>Swordsmen</p>
                            </div>

                        </div>
                        <div className='flex space-x-3 text-sm text-base-content'>
                            <span className='p-2 w-14 bg-base-200 rounded-lg'>React</span>
                            <span className='p-2 bg-base-200 rounded-lg'>Node Js</span>
                        </div>

                        <div className="card-actions text-sm text-primary justify-end">
                            <p>Application Received</p>
                            <button>View</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DataListsSection