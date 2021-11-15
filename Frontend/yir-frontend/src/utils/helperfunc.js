
import { useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

export function Redirect({ to }) {
    let navigate = useNavigate();
    useEffect(() => {
        navigate(to);
    });
    return null;
}

export const PrivateRoute = ({ children, redirectTo, auth }) => {
    let isAuthenticated = auth;

    return isAuthenticated ? children : <Navigate to={redirectTo} />;
}



