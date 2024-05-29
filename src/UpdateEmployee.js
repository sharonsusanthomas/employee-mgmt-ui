import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UpdateEmployee.css'; // Import the CSS file

function UpdateEmployee() {
    const { id } = useParams(); // Get the employee ID from the URL params
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        name: '',
        phno: '',
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
            navigate('/view-employees');
        } catch (error) {
            console.error('Error updating employee:', error);
        }
    };

    return (
        <div className="add-employee-container">
            <h2>Update Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group-row">
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={employee.name}
                            onChange={handleChange}
                            className="input-shade1"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone:</label>
                        <input
                            type="text"
                            name="phno"
                            value={employee.phno}
                            onChange={handleChange}
                            className="input-shade2"
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
                            className="input-shade3"
                            required
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
                            className="input-shade4"
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
                            className="input-shade5"
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
                            className="input-shade1"
                            required
                        />
                    </div>
                    
                </div>
                <div className="form-group-row">
                <div className="form-group">
                         <label>Classification:</label>
                            <select
                                    name="classification"
                                    value={employee.classification}
                                    onChange={handleChange}
                                    className="input-shade1"  
                                    required
                            >
                            <option value="">Select Classification</option>
                            <option value="admin">Admin</option>
                            <option value="employee">Employee</option>
                            <option value="faculty">Faculty</option>
                            </select>
                    </div>
                    <button type="submit">Update Employee</button>
                    </div>
                
            </form>
            <br />
            <Link to="/view-employees" className="btn btn-primary">Back to view</Link>
        </div>
    );
}

export default UpdateEmployee;
