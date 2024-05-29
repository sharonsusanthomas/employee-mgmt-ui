import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './LoginValidation';
import axios from 'axios';
import './Login.css';

function Login() {
    const [values, setValues] = useState({
        username: "",
        password: ""
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    // Update form values when component mounts
    useEffect(() => {
        setValues({ username: "", password: "" });
    }, []);

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    
        // Check if there are no errors before making the API call
        if (!errors.username && !errors.password) {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    const { status, isAdmin } = res.data;
                    if (status === "success") {
                        // Save user's name in local storage
                        localStorage.setItem('userName', values.username);
                        // Reset form values
                        setValues({ username: "", password: "" });
                        // Redirect based on admin status
                        if (isAdmin) {
                            navigate('/Home');
                        } else {
                            navigate('/Employeehome');
                        }
                    } else if (status === "no_user") {
                        alert("User does not exist.");
                    } else if (status === "wrong_password") {
                        alert("Password does not match.");
                    } else if (status === "inactive_user") {
                        alert("Your access is denied. Your account is inactive.");
                    } else {
                        alert("An error occurred. Please try again.");
                    }
                })
                .catch(err => {
                    console.error("Error:", err);
                    alert("An error occurred. Please try again.");
                });
        }
    };
    
    return (
        <div className='login-container'>
            <div className='login-form'>
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className='form-group'>
                        <label htmlFor='username'><strong>Username</strong></label>
                        <input
                            type='username'
                            placeholder='Enter Username'
                            name='username'
                            value={values.username}
                            onChange={handleInput}
                            className='form-control'
                        />
                        {errors.username && <span className='error-message'>{errors.username}</span>}
                    </div>  
                    <div className='form-group'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            name='password'
                            value={values.password}
                            onChange={handleInput}
                            className='form-control'
                        />
                        {errors.password && <span className='error-message'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success'>Login</button>
                    
                </form>
            </div>
        </div>
    );
}

export default Login;
