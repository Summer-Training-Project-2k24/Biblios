import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { fetchProfile as fetchProfileApi } from '../api';

const AuthContext = createContext();



export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authError, setAuthError] = useState(null);
    const navigate = useNavigate();

    const signupUser = async (credentials) => {
        try {
            const response = await axios.post('http://localhost:3400/user/signup', credentials);
            const token = response.data.token;
            localStorage.setItem('token', token);
            await fetchProfile(token);
            navigate('/profile');
        } catch (error) {
            console.error('Signup error:', error);
            setAuthError('Signup failed');
        }
    };


    const loginUser = async (credentials) => {
        try {
            const response = await axios.post('http://localhost:3400/user/login', credentials);
            const token = response.data.token;
            localStorage.setItem('token', token);
            await fetchProfile(token);
            navigate('/profile');
        } catch (error) {
            console.error('Login error:', error);
            setAuthError('Login failed');
        }
    };

    const logoutUser = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
    };

    const fetchProfile = async (token) => {
        try {
            const response = await fetchProfileApi(token);
            setUser(response.data.user);
        } catch (error) {
            console.error('Profile fetch error:', error);
            setAuthError('Failed to fetch profile');
        }
    };

    return (
        <AuthContext.Provider value={{ user, authError, signupUser, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
