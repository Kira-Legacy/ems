import React from "react";
import { UserAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user, loading} = UserAuth()

    if(loading) {
        <div>loading ...</div>
    }

    return user ? children: <Navigate to="/login" />
}

export default PrivateRoutes;