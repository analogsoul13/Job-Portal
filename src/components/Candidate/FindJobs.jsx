import React, { useEffect, useState } from 'react'
import JobCard from '../JobCard'
import JobFilter from '../JobFilter'
import SearchBar from '../SearchBar'
import { useSelector } from 'react-redux'
import { getAllJobsApi } from '../../services/jobServices'

function FindJobs() {
  const [jobs, setJobs] = useState([])
  const { token } = useSelector((state) => state.auth)
  const [filters, setFilters] = useState({
    search: "",
    minSalary: "",
    maxSalary: "",
    location: "",
    experienceLevel: "",
    page: 1,
    limit: 10
  })

  const buildQuery = () => {
    const query = new URLSearchParams();

    if (filters.search) query.append("search", filters.search);
    if (filters.minSalary) query.append("minSalary", filters.minSalary);
    if (filters.maxSalary) query.append("maxSalary", filters.maxSalary);
    if (filters.location) query.append("location", filters.location);
    if (filters.experienceLevel) query.append("experienceLevel", filters.experienceLevel);

    query.append("page", filters.page);
    query.append("limit", filters.limit);

    return query.toString();
  };


  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const queryString = buildQuery()
        const headers = {
          Authorization: `Bearer ${token}`
        }

        console.log("API Query:", queryString);

        const res = await getAllJobsApi(queryString, headers)
        if (res.status === 200) {
          setJobs(res.data.jobs)
          console.log("Fetched Jobs :", res)
        } else {
          console.error("Error fetching jobs:", res.data?.message)
        }
      } catch (error) {
        console.error("Fetch error:", error.message);
      }
    }
    fetchAllJobs()
  }, [filters])

  if (!jobs) return <div><span className="loading loading-bars loading-xl"></span></div>

  return (
    <>
      <div className='flex flex-col space-y-2'>
        <div className='flex flex-col'>
          <SearchBar filters={filters} setFilters={setFilters} />
          <JobFilter filters={filters} setFilters={setFilters} />
        </div>
        <div className='max-w-full grid sm:grid-cols-3 gap-6 border p-4 rounded-lg'>
          {jobs.length > 0 ? (
            jobs.map((job) => <JobCard key={job._id} job={job} />)
          ) : (
            <p className='text-center col-span-3'>No jobs found.</p>
          )}
        </div>
      </div>

    </>
  )
}

export default FindJobs