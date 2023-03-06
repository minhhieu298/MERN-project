import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { HOME_PAGE, LOGIN_PAGE } from '../setting/constants';
import useStore from './hooks/useStore';

const PrivivateRoute = ({ allowedRoles }) => {
    const { isUser, auth } = useStore();
    if (!isUser)
        return <Navigate to={LOGIN_PAGE} replace />
    else {
        return allowedRoles.includes(auth?.role) ? <Outlet /> : <Navigate to={HOME_PAGE} replace />
    }
}

export default PrivivateRoute