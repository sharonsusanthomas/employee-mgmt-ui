import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ViewEmployee.css';
import Header from './Header';
import Footer from './Footer';

function ViewEmployees() {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('http://localhost:8081/viewEmployee');
            setEmployees(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this employee?');
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:8081/deleteEmployee/${id}`);
                fetchEmployees(); // Fetch updated list after deletion
            } catch (error) {
                console.error('Error deleting employee:', error);
            }
        }
    };

    return (
        <div>
            <Header />
            <h2>View Employees</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Salary</th>
                                <th>Country</th>
                                <th>Added By</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee, index) => (
                                <tr key={index}>
                                    <td>{employee.name}</td>
                                    <td>{employee.phno}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.age}</td>
                                    <td>{employee.salary}</td>
                                    <td>{employee.country}</td>
                                    <td>{employee.addedby}</td>
                                    <td>
                                        <Link to={`/update-employee/${employee.id}`}>Update</Link>
                                        {' / '}
                                        <button className="delete-button" onClick={() => handleDelete(employee.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Link to="/home" className="btn btn-primary">Back to Home</Link>
                </div>
            )}
            <Footer/>
        </div>
        
    );
    
}

export default ViewEmployees;
