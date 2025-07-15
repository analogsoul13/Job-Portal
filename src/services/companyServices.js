import BASE_URL from "./baseUrl";
import commonApi from "./commonApi";

export const getCompaniesByUser = async (headers) => {
    return await commonApi(`${BASE_URL}/api/v1/company/get`, "GET", headers)
}

export const createCompanyApi = async (formData, headers) => {
    return await commonApi(`${BASE_URL}/api/v1/company/register`, "POST", formData, headers)
}