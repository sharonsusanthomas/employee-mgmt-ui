import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Welcome to the Employee Management System</h1>
                <p>Manage your company's employee information efficiently!</p>
                <Link to="/" className="btn btn-primary">Get Started</Link>
            </div>
            <div className="features">
                <div className="feature">
                    <img src="path/to/add-employee.jpg" alt="Add Employee" className="feature-image"/>
                    <h2>Add Employee</h2>
                    <p>Add new employees to your company database.</p>
                    <Link to="/add-employee" className="btn btn-secondary">Add Employee</Link>
                </div>
                <div className="feature">
                    <img src="path/to/update-employee.jpg" alt="Update Employee" className="feature-image"/>
                    <h2>Update Employee</h2>
                    <p>Update the details of existing employees.</p>
                    <Link to="/update-employee" className="btn btn-secondary">Update Employee</Link>
                </div>
                <div className="feature">
                    <img src="path/to/view-employees.jpg" alt="View Employees" className="feature-image"/>
                    <h2>View Employees</h2>
                    <p>See the entire list of employees in the company.</p>
                    <Link to="/view-employees" className="btn btn-secondary">View Employees</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
