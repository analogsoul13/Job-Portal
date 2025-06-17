import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        userRole: null,
        userInfo: null,
        token: null,  // Storing token for API calls
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.userRole = action.payload?.role || null;

            const user = action.payload?.user;
            if (user) {
                state.userInfo = {
                    id: user._id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    profilePic: user.profile?.profilePhoto || "", // Avoid undefined errors
                };
                state.token = action.payload?.token || null; // Store token in Redux
                localStorage.setItem("token", action.payload?.token);
            } else {
                console.error("Login payload does not contain user data:", action.payload);
            }
        },

        logout: (state) => {
            state.isLoggedIn = false;
            state.userRole = null;
            state.userInfo = null;
            state.token = null;
            localStorage.removeItem("token")
        },
        updateProfileInfo: (state, action) => {
            if (action.payload) {
                state.userInfo = {
                    ...state.userInfo,
                    ...action.payload
                };
            }
        },
    },
});

export const { login, logout, updateProfileInfo } = authSlice.actions
export default authSlice.reducer