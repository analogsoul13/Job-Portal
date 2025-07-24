import BASE_URL from "./baseUrl";
import commonApi from "./commonApi";

export const createJobApi = async (finalJobData, headers) => {
    return await commonApi(`${BASE_URL}/api/v1/jobs`, "POST", headers, finalJobData)
}


// Get all jobs
export const getAllJobsApi = async (queryString, headers) => {
    return await commonApi(`${BASE_URL}/api/v1/jobs?${queryString}`, "GET", headers)
}


// To fetch locations of jobs
export const getJobLocationsApi = async () => {
    return await commonApi(`${BASE_URL}/api/v1/jobs/locations`, "GET")
}


export const applyForJobApi = async (jobId, headers) => {
    return await commonApi(`${BASE_URL}/api/v1/application/apply/${jobId}`, "POST", headers, null)
}


export const getAppliedJobsApi = async (headers) => {
    return await commonApi(`${BASE_URL}/api/v1/application/get`, "GET", headers)
}


export const getJobsByRecruiterApi = async (headers) => {
    return await commonApi(`${BASE_URL}/api/v1/jobs/recruiter`, "GET", headers)
}