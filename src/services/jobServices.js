import BASE_URL from "./baseUrl";
import commonApi from "./commonApi";

// Get all jobs
export const getAllJobsApi = async (queryString,headers) => {
    return await commonApi(`${BASE_URL}/api/v1/jobs?${queryString}`, "GET", headers)
}


// To fetch locations of jobs
export const getJobLocationsApi = async () => {
    return await commonApi(`${BASE_URL}/api/v1/jobs/locations`, "GET")
}