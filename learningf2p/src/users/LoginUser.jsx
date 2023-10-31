import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastConfig = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'light',
};

export const LoginUser = () => {
    const [token, setToken] = useState('');

    const { register, handleSubmit } = useForm();

    // Simulated login function
    const simulateLogin = (data) => {
        return new Promise((resolve, reject) => {
            // Simulating an asynchronous API call
            setTimeout(() => {
                // Simulating a successful login
                if (data.email === 'abc@gmail.com' && data.password === '12345') {
                    const userToken = 'fdkglkfdlk3465kmdkmgdkkfgkdfgkl';
                    resolve(userToken);
                } else {
                    // Simulating a failed login
                    reject(new Error('Invalid credentials'));
                }
            }, 1000); // Simulating a 1-second delay
        });
    };

    // Function to handle login
    const loginHandler = async (data) => {
        try {
            const userToken = await simulateLogin(data);
            sessionStorage.setItem('token', userToken);
            localStorage.setItem('token', userToken);
            setToken(userToken);
            toast('Login successful', toastConfig);
            console.log(userToken);
        } catch (error) {
            toast('Login failed. Check your credentials.', toastConfig);
        }
    };

    // Function to fetch token from storage
    const fetchDataFromStorage = () => {
        const tokenFromStorage = sessionStorage.getItem('token');
        setToken(tokenFromStorage);
        console.log(tokenFromStorage);
    };

    // Function to handle logout
    const logout = () => {
        sessionStorage.removeItem('token');
        setToken('');
    };

    // Check if the user is already logged in
    useEffect(() => {
        const tokenFromStorage = sessionStorage.getItem('token');
        if (tokenFromStorage) {
            setToken(tokenFromStorage);
        }
    }, []);

    return (
        <div>
            <h1>Login User</h1>
            <form onSubmit={handleSubmit(loginHandler)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register('email')} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" {...register('password')} />
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>

            <div>
                <br />
                <p>Token: {token}</p>
                <button onClick={fetchDataFromStorage}>Fetch data from storage</button>
                <br />
                <br />
                <button onClick={logout}>Logout</button>
            </div>

            <ToastContainer {...toastConfig} />
        </div>
    );
};
