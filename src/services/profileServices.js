import BASE_URL from "./baseUrl";
import commonApi from "./commonApi";

export const getUserProfile = async () => {
    try {
        return await commonApi(`${BASE_URL}/api/v1/user/profile`, "GET");  // No token needed
    } catch (error) {
        throw error.response?.data || { message: 'Something went wrong' };
    }
};
