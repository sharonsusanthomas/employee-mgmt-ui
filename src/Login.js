import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './LoginValidation';
import axios from 'axios';

function Login() {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

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
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label><br />
                        <input
                            type='email'
                            placeholder='Enter email'
                            name='email'
                            onChange={handleInput}
                            className='form-control border rounded-0'
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>  
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label><br />
                        <input
                            type='password'
                            placeholder='Enter Password'
                            name='password'
                            onChange={handleInput}
                            className='form-control border rounded-0'
                        />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 mb-3'>Login</button>
                    <p>Have not Created An Account Yet?</p>
                    <Link to='/signup' className='btn btn-light border w-100 rounded-0'>Create Account</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
