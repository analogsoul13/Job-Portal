import React from 'react'
import JobFilter from './JobFilter'
import { useState } from 'react'

function SearchBar() {
    const [isFilterVisible, setIsFilterVisible] = useState(false)

    const toggleFilter = () => {
        setIsFilterVisible(!isFilterVisible)
    }
    return (
        <>
            {/* Search */}
            <div className="bg-base-100 shadow-xl p-2 rounded-lg">
                <input type="text" className="w-full input input-bordered p-3 rounded-lg" placeholder="Search for jobs..." />
                {/* <h2 className="mt-4 text-2xl font-semibold">Welcome, <span className='text-accent'>Anne Hathaway</span></h2> */}
                <button onClick={toggleFilter} className='btn md:hidden btn-xs text-base-content btn-link'>Filter</button>

                {/* Filter Card Rendering */}
                {
                    isFilterVisible && (
                        <div className='lg:hidden flex fade-in justify-center'>
                            <JobFilter />
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default SearchBar