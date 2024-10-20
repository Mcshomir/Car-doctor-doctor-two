import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useState('')
    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user?.email) {
        return children;

    }

    return <Navigate to='/login' replace></Navigate>
};

export default PrivetRoute;