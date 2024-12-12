import React from 'react'
import JobCard from '../JobCard'

function AppliedJobList() {
  return (
    <>
      <div className='max-w-full bg-base-100 flex flex-col h-screen p-4 rounded-lg shadow-xl'>
        <h1 className='text-xl bg-base-200 rounded-lg p-2 shadow font-semibold text-center'>Jobs Applied</h1>
        <div className='flex my-4 space-x-2 py-4 shadow bg-base-200 rounded-lg'>
          <JobCard/>
          <JobCard/>
          <JobCard/>

        </div>
      </div>
    </>
  )
}

export default AppliedJobList