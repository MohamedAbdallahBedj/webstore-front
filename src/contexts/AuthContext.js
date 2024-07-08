"use client"
import { createContext, useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';
import api from '../utils/api';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const verify = async () => {
            try {
                const token = Cookies.get('token');
                if (token) {
                    api.defaults.headers.Authorization = `Bearer ${token}`;
                    setLoading(true);
                    const { data } = await api.get('/auth/me');
                    if (data.success) {
                        setUser(response.data.user);
                    } else {
                        // Handle error when success is false
                        throw new Error('Verification failed:', data.message)
                    }
                }
            } catch (error) {
                Cookies.remove('token');
                setUser(null);
            } finally {
                setLoading(false);
            }
        }
        verify();
    }, []);

    const login = async ({ email, password }) => {
        try {
            setLoading(true)
            const { data } = await api.post('/user/login', { email, password });
            if (data.success) {
                Cookies.set('token', data.token);
                api.defaults.headers.Authorization = `Bearer ${data.token}`;
                setUser(data.user);
                router.push('/');
            } else {
                // Handle error when success is false
                throw new Error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error?.message);
        } finally {
            setLoading(false)
        }



    };

    const signup = async ({ email, password }) => {
        try {
            setLoading(true)
            const { data } = await api.post('/user/register', { email, password });
            if (data.success) {
                Cookies.set('token', data.token);
                api.defaults.headers.Authorization = `Bearer ${data.token}`;
                setUser(data.user);
                router.push('/');
                toast.success("Succés!");
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.log(error)
            toast.error(error?.message);
        } finally {
            setLoading(false)
        }

    };

    const logout = () => {
        Cookies.remove('token');
        setUser(null);
        delete api.defaults.headers.Authorization;
        router.push('/authentification');
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
            {children}
            <Toaster position="bottom-center" />
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
