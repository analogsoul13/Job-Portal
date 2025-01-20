import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        isLoggedIn:false,
        userRole:null,
    },
    reducers:{
        //actions
        login: (state, action) => {
            state.isLoggedIn =true;
            state.userRole = action.payload?.role || 'candidate' // Default to user role
        },
        logout: (state) => {
            state.isLoggedIn = false,
            state.userRole = null
        }
    }
})
export const {login, logout} = authSlice.actions
export default authSlice.reducer