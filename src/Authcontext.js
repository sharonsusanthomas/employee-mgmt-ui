import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            // Optionally, fetch user data if needed
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    }, [token]);

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:8081/login', { email, password });
            if (response.data.message === 'success') {
                const { token } = response.data;
                setToken(token);
                localStorage.setItem('token', token);
                const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode JWT to get user info
                setUser({ id: decodedToken.userId, username: decodedToken.username });
            } else {
                return response.data;
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    const logout = () => {
        setToken('');
        setUser(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
