import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import './AddEmployee.css';

function AddEmployee() {
    const [employee, setEmployee] = useState({
        name: '',
        phno: '',
        email: '',
        age: '',
        salary: '',
        country: ''
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Fetch logged-in user's name from local storage
    const addedBy = localStorage.getItem('userName');

    useEffect(() => {
        if (addedBy) {
            setEmployee(prevState => ({
                ...prevState,
                added_by: addedBy
            }));
        }
    }, [addedBy]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/addEmployee', employee)
            .then(response => {
                setSuccessMessage('Employee added successfully!');
                setEmployee({
                    name: '',
                    phno: '',
                    email: '',
                    age: '',
                    salary: '',
                    country: ''
                });
            })
            .catch(error => {
                console.error('Error adding employee:', error);
                setError('Error adding employee. Please try again.');
            });
    };

    return (
        <div>
            <Header />
            <div className="add-employee-container">
                <h2>Add Employee</h2>
                {error && <p className="error-message">{error}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={employee.name}
                                onChange={handleChange}
                                required
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone Number:</label>
                            <input
                                type="text"
                                name="phno"
                                value={employee.phno}
                                onChange={handleChange}
                                required
                                pattern="[0-9]{10}"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Email Address:</label>
                            <input
                                type="email"
                                name="email"
                                value={employee.email}
                                onChange={handleChange}
                                required
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Age:</label>
                            <input
                                type="number"
                                name="age"
                                value={employee.age}
                                onChange={handleChange}
                                required
                                min="18"
                                max="100"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Salary:</label>
                            <input
                                type="number"
                                name="salary"
                                value={employee.salary}
                                onChange={handleChange}
                                required
                                min="0"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Country:</label>
                            <input
                                type="text"
                                name="country"
                                value={employee.country}
                                onChange={handleChange}
                                required
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="form-group-row">
                        
                        <div className="form-group">
                            <label>Added By:</label>
                            <input
                                type="text"
                                name="added_by"
                                value={employee.added_by}
                                onChange={handleChange}
                                required
                                className="form-control"
                                disabled // Disable input field to prevent modification
                            />
                        </div>
                    </div>
                    <div className="form-group-row">
                        <div className="form-group">
                            <label>Username:</label>
                            <input
                                type="text"
                                name="username"
                                value={employee.username}
                                onChange={handleChange}
                                required
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                 type="password"
                                 name="password"
                                 value={employee.password}
                                 onChange={handleChange}
                                 required
                                 pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                                 title="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
                                 className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label>Classification:</label>
                               <select
                                 name="classification"
                                  value={employee.classification}
                                  onChange={handleChange}
                                 required
                                  className="form-control"
                                >
                            <option value="">Select Classification</option>
                            <option value="admin">Admin</option>
                            <option value="employee">Employee</option>
                            <option value="faculty">Faculty</option>
                         </select>
                        </div>

                    </div>
                    <button type="submit" className="btn btn-primary">Add Employee</button>
                </form>
                <br></br>
                <Link to="/home" className="btn btn-secondary">Back to Home</Link>
            </div>
            <br></br><br></br><br></br><br></br>
            <Footer />
        </div>
    );
}

export default AddEmployee;