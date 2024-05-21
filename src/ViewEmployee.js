import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ViewEmployee.css'; // Import the CSS file

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

    return (
        <div>
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
                                <th>Actions</th> {/* New column for actions */}
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee, index) => (
                                <tr key={index}>
                                    <td>{employee.name}</td>
                                    <td>{employee.ph}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.age}</td>
                                    <td>{employee.salary}</td>
                                    <td>{employee.country}</td>
                                    <td>
                                        <Link to={`/update-employee/${employee.id}`}>Update</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Link to="/home" className="btn btn-primary">Back to Home</Link>
                </div>
            )}
        </div>
    );
}

export default ViewEmployees;
