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
    const [loading, setLoading] = useState(false); // Loading state while checking auth status



    // Function to handle user login
    const login = async (credentials) => {
        try {
            // Perform API call to authenticate user
            setLoading(true)
            const response = await fetch('https://your-api-url/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error('Failed to login');
            }

            // Assuming the server responds with a JWT token
            const { token } = await response.json();

            // Decode the token to get user data
            const decodedToken = jwtDecode(token);

            // Set user data and token in state
            setUser(decodedToken);

            // Store token in local storage
            localStorage.setItem('token', token);

            return decodedToken;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    // Function to handle user logout
    function logout() {
        localStorage.removeItem('token'); // Remove token from local storage
        setUser(null); // Reset user state
    }

    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    setLoading(true);
                    // Make an API call to your backend to verify the token
                    const response = await fetch('https://your-api-url/verify-token', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    if (response.ok) {
                        const decodedToken = jwtDecode(token);
                        setUser(decodedToken);
                        console.log('response ok')
                    } else {
                        console.log('response not ok')
                        throw new Error('Token verification failed');
                    }
                } catch (error) {
                    console.error('Token verification failed:', error);
                    logout();
                } finally {
                    setLoading(false);
                }
            }
        };

        verifyToken();

    }, []);

    const value = {
        user,
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
