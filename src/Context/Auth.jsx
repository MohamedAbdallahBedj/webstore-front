// AuthContext.js

import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a context for managing authentication state
const AuthContext = createContext();

// Custom hook to use the AuthContext
export function useAuth() {
    return useContext(AuthContext);
}

// AuthProvider component to wrap your app with
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null); // Current user state
    const [loading, setLoading] = useState(true); // Loading state while checking auth status

    // Function to check if user is authenticated
    function isAuthenticated() {
        const token = localStorage.getItem('token');
        return !!token; // Return true if token exists, false otherwise
    }

    // Function to handle user login
    async function login(email, password) {
        // Simulated API call to authenticate user
        try {
            // Here you would typically send a request to your backend with the email and password
            // and receive a token in response
            const token = 'your_auth_token';
            localStorage.setItem('token', token); // Store token in local storage
            setUser({ email }); // Set user object with email (you can include more user details if needed)
        } catch (error) {
            console.error('Login failed:', error);
            throw new Error('Login failed');
        }
    }

    // Function to handle user logout
    function logout() {
        localStorage.removeItem('token'); // Remove token from local storage
        setUser(null); // Reset user state
    }

    useEffect(() => {
        // Check authentication status on component mount
        const token = localStorage.getItem('token');
        if (token) {
            // If token exists, set user state
            setUser({ email: 'user@example.com' }); // Here you can fetch user data using the token if needed
        }
        setLoading(false); // Set loading to false after checking auth status
    }, []);

    const value = {
        user,
        isAuthenticated,
        login,
        logout,
        loading,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
