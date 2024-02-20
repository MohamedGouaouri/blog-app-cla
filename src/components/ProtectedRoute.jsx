/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import {useNavigate, Outlet} from 'react-router-dom'
import AuthContext from '../contexts/auth';

export default function ProtectedRoute() {
    const navigate = useNavigate();
    const isAuth = useContext(AuthContext)
    console.log(isAuth)
    useEffect(() => {
        if (!isAuth) {
            return navigate('/login')
        }
    })
    
    return <>
        <Outlet />
    </>
}