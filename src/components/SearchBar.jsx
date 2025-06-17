import React from 'react'

function SearchBar({ filters, setFilters }) {

    const handleChange = (e) => {
        setFilters(prev => ({
            ...prev,
            search: e.target.value,
            page: 1
        }))
    }

    return (
        <>
            {/* Search */}
            <div className="bg-base-100 md:w-full rounded-t-lg p-2">
                <input 
                type="text" 
                className="w-full input input-bordered p-3 rounded-lg" 
                placeholder="Search for jobs..."
                value={filters.search}
                onChange={handleChange} />
            </div>
        </>
    )
}

export default SearchBar