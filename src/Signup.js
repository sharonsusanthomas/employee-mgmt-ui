import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './SignupValidation';
import axios from 'axios';
import './Signup.css'; // Import CSS file

function Signup({ handleFlip }) {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validation(values);
        setErrors(validationErrors);
        
        // Check if there are no errors
        if (Object.values(validationErrors).every(error => error === "")) {
            axios.post('http://localhost:8081/signup', values)
                .then(res => {
                    navigate('/login');
                })
                .catch(err => console.log(err));
        }
    };
    

    return (
        <div className='signup-container'>
            <div className='signup-form-wrapper'>
                <form onSubmit={handleSubmit}>
                    <h2 className='signup-title'>Sign-Up</h2>
                    <div className='form-group'>
                        <label htmlFor='name' className='form-label'><strong>Name</strong></label>
                        <input type='name' placeholder='Enter Name' name='name'
                            onChange={handleInput} className='form-input' />
                        {errors.name && <span className='error-message'>{errors.name}</span>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email' className='form-label'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter email' name='email'
                            onChange={handleInput} className='form-input' />
                        {errors.email && <span className='error-message'>{errors.email}</span>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password' className='form-label'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password'
                            name='password' onChange={handleInput} className='form-input' />
                        {errors.password && <span className='error-message'>{errors.password}</span>}
                    </div>
                    <button type="submit" className='signup-button'>Signup</button>
                    <p className='login-link'>Already have an Account? <Link to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
