import React from 'react'
import JobCard from '../JobCard'
import JobFilter from '../JobFilter'
import SearchBar from '../SearchBar'

function FindJobs() {
  return (
    <>
      <div className='flex flex-col space-y-2'>
        <div><SearchBar /></div>
        <div className='max-w-full grid sm:grid-cols-3 gap-6 bg-base-100 p-4 rounded-lg shadow-xl'>
          <div className='col-span-1'><JobCard /></div>
          <div><JobCard /></div>
          <div><JobCard /></div>
          <div><JobCard /></div>
          <div><JobCard /></div>
          <div><JobCard /></div>
        </div>
      </div>

    </>
  )
}

export default FindJobs