import React from 'react'
import JobCard from '../JobCard'

function FindJobs() {
  return (
    <>
    <div className='max-w-full grid grid-cols-3 gap-6 bg-base-100 p-4 rounded-lg shadow-xl'>
        <div className='col-span-1'><JobCard/></div>
        <div><JobCard/></div>
        <div><JobCard/></div>
        <div><JobCard/></div>
        <div><JobCard/></div>
        <div><JobCard/></div>
    </div>
    </>
  )
}

export default FindJobs