import React from 'react'
import { Spinner } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

const LogoutPage = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {
        logout();
        navigate('/login');
    }, [logout]);
    return (
        <div>
            <div className="my-5 text-center">
                <Spinner animation="border" variant="primary" />
            </div>
        </div>
    )
}

export default LogoutPage
