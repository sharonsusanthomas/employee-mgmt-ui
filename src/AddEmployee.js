import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import css from './AddEmployee.css'; // Import the CSS file

function AddEmployee() {
    const [employee, setEmployee] = useState({
        name: '',
        ph: '',
        email: '',
        age: '',
        salary: '',
        country: '',
        added_by: ''
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/addEmployee', employee)
            .then(response => {
                setSuccessMessage('Employee added successfully!');
                // Reset the form fields
                setEmployee({
                    name: '',
                    ph: '',
                    email: '',
                    age: '',
                    salary: '',
                    country: '',
                    added_by: ''
                });
            })
            .catch(error => {
                console.error('There was an error adding the employee!', error);
                setError('Error adding employee. Please try again.');
            });
    };

    return (
        <div className="add-employee-container">
            <h2>Add Employee</h2>
            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
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
                        name="ph"
                        value={employee.ph}
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
                <div className="form-group">
                    <label>Added By:</label>
                    <input
                        type="text"
                        name="added_by"
                        value={employee.added_by}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Employee</button>
            </form>
            <br></br>
            <Link to="/home" className="btn btn-secondary">Back to Home</Link>
        </div>
    );
}

export default AddEmployee;
