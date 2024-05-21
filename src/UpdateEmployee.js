import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './UpdateEmployee.css'; // Import the CSS file

function UpdateEmployee() {
    const { id } = useParams(); // Get the employee ID from the URL params

    const [employee, setEmployee] = useState({
        name: '',
        ph: '',
        email: '',
        age: '',
        salary: '',
        country: ''
    });

    useEffect(() => {
        fetchEmployee();
    }, []);

    const fetchEmployee = async () => {
        try {
            const response = await axios.get(`http://localhost:8081/updateEmployee/${id}`);
            setEmployee(response.data);
        } catch (error) {
            console.error('Error fetching employee:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8081/updateEmployee/${id}`, employee);
            alert('Employee details updated successfully!');
        } catch (error) {
            console.error('Error updating employee:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Update Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={employee.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="ph"
                        value={employee.ph}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={employee.email}
                        onChange={handleChange}
                        required
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
                    />
                </div>
                <button type="submit">Update Employee</button>
            </form>
            <br></br>
            <Link to="/home" className="btn btn-primary">Back to Home</Link>
        </div>
    );
}

export default UpdateEmployee;
