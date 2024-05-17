import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './SignupValidation';
import axios from 'axios'


function Signup() {
    const [values, setValues] = useState({
        name:"",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const navigate =useNavigate();
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        if(errors.name === "" && errors.email === "" && errors.password === "")
            {
                axios.post('http://localhost:8081/signup',values)
                .then (res =>{
                    navigate('/');
                } )
                .catch(err => console.log(err));
            }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form action="" onSubmit={handleSubmit}>
                    <h2>Sign-Up</h2>
                <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label><br />
                        <input type='name' placeholder='Enter Name' name='name'
                        onChange={handleInput} className='form-control border rounded-0'/>
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label><br />
                        <input type='email' placeholder='Enter email' name='email'
                         onChange={handleInput}className='form-control border rounded-0'/>
                         {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label><br />
                        <input type='password' placeholder='Enter Password' 
                        name='password' onChange={handleInput}className='form-control border rounded-0'/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button className='btn btn-success w-100 mb-3'>Signup</button>
                    <p>Aldready have an Account?</p>
                    <Link to ='/' className='btn btn-light border w-100 rounded-0'>Login</Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;
