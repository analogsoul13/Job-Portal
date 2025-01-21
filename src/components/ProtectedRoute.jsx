import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({children, role}) => {
    const {isLoggedIn, userRole} = useSelector((state)=>state.auth)
    if(!isLoggedIn){
        return <Navigate to="/auth" />
    }

    if(role && userRole !== role) {
        return <Navigate to="/unauthorized" />
    }

    return children

}

export default ProtectedRoute