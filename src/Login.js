import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './LoginValidation';
import axios from 'axios';
import './Login.css';

function Login() {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    // Update form values when component mounts
    useEffect(() => {
        setValues({ email: "", password: "" });
    }, []);

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    
        // Check if there are no errors before making the API call
        if (!errors.email && !errors.password) {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    if (res.data === "success") {
                        // Reset form values
                        setValues({ email: "", password: "" });
                        navigate('/Home');
                    } else if (res.data === "no_user") {
                        alert("User does not exist.");
                    } else if (res.data === "wrong_password") {
                        alert("Password does not match.");
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
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input
                            type='email'
                            placeholder='Enter email'
                            name='email'
                            value={values.email}
                            onChange={handleInput}
                            className='form-control'
                        />
                        {errors.email && <span className='error-message'>{errors.email}</span>}
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
                    <p>Have not Created An Account Yet?</p>
                    <Link to='/signup' className='btn btn-light'>Create Account</Link>
                </form>
            </div>
        </div>
    );
    
}

export default Login;
