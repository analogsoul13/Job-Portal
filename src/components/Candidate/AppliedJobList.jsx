import React, { useEffect, useState } from 'react'
import JobCard from '../JobCard'
import { useSelector } from 'react-redux'
import { getAppliedJobsApi } from '../../services/jobServices'

function AppliedJobList() {
  const [appliedJobs, setAppliedJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const token = useSelector((state) => state.auth.token)

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${token}`
        }
        const res = await getAppliedJobsApi(headers)
        console.log("Fetched Applications : ", res);

        setAppliedJobs(res.data.application)
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch applied jobs', err)
      } finally {
        setLoading(false)
      }
    }
    if (token) fetchAppliedJobs()
  }, [token])

  if (loading) return <div className="flex justify-center h-full items-center"><span className="loading loading-bars loading-xl"></span></div>;
  return (
    <>
      <div className='max-w-full bg-base-100 flex flex-col h-screen p-4 rounded-lg shadow-xl'>
        <h1 className='text-xl bg-base-200 rounded-lg p-2 shadow font-semibold text-center'>Jobs Applied</h1>
        <div className='grid sm:grid-cols-3 my-4 space-x-2 px-3 py-4 bg-base-200 rounded-lg'>
          {appliedJobs?.length > 0 ? (
            appliedJobs.map((app) =>
              <JobCard
                key={app._id}
                job={app.job}
                showApplyButton={false}
                applicationStatus={app.status} />)
          ) : (
            <p className='text-center col-span-3'>No jobs found.</p>
          )}


        </div>
      </div>
    </>
  )
}

export default AppliedJobList