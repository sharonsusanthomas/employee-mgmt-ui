import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import addImage from './add.png';
import updateImage from './update.jpg';
import viewImage from './view.jpg';
import backgroundImage from './background.jpg';

function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Employee Management System</h1>
                <p>Manage your company's employee information efficiently!</p>
            </div>
        
            
            <div className="features">
                <div className="feature">
                    <img src={addImage} alt="Add Employee" className="feature-image" />
                    <h2>Add Employee</h2>
                    <p>Add new employees to your company database.</p>
                    <Link to="/add-employee" className="btn btn-secondary">Add Employee</Link>
                </div>
               
                <div className="feature">
                    <img src={viewImage} alt="View Employees" className="feature-image" />
                    <h2>View Employees</h2>
                    <p>See the entire list of employees in the company.</p>
                    <Link to="/view-employees" className="btn btn-secondary">View Employees</Link>
                </div>
            </div>
            </div>
        
    );
}

export default Home;