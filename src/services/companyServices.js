import BASE_URL from "./baseUrl";
import commonApi from "./commonApi";

export const getCompaniesByUser = async (headers) => {
    return await commonApi(`${BASE_URL}/api/v1/company/get`, "GET", headers)
}

export const createCompanyApi = async (formData, headers) => {
    return await commonApi(`${BASE_URL}/api/v1/company/register`, "POST", headers, formData)
}

export const updateCompanyApi = async (companyId, headers, formData) => {
    return await commonApi(`${BASE_URL}/api/v1/company/update/${companyId}`, "PUT", headers, formData)
}

export const deleteCompanyApi = async (companyId, headers) => {
    return await commonApi(`${BASE_URL}/api/v1/company/delete/${companyId}`, "DELETE", headers)
}