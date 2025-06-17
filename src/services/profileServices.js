import BASE_URL from "./baseUrl";
import commonApi from "./commonApi";

export const getUserProfile = async (headers) => {
    return await commonApi(`${BASE_URL}/api/v1/user/profile`, "GET", headers);

};

export const updateProfileApi = async (profileData, headers ) => {
    return await commonApi(`${BASE_URL}/api/v1/user/profile/update`, "PUT", headers, profileData);
};