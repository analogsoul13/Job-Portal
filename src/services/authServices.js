import BASE_URL from "./baseUrl";
import commonApi from "./commonApi";

export const registerApi = async (data) => {
    return await commonApi(`${BASE_URL}/api/v1/user/register`,"POST","", data)
}

export const loginApi = async (data) => {
    return await commonApi(`${BASE_URL}/api/v1/user/login`,"POST","",data)
}