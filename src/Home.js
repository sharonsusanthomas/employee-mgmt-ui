import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import addImage from './add.png';
import viewImage from './view.jpg';
import proImage from './pro.jpg';
import Header from './Header';
import Footer from './Footer';

function Home() {
    // Get the admin's name from local storage or any other source
    const adminName = localStorage.getItem('adminName');

    return (
        <>
            <div>
                <Header />
            </div>
            <div className="home-container">
              
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
                    <div className="feature">
                        <img src={viewImage} alt="Employee Logs" className="feature-image" />
                        <h2>Employee Logs</h2>
                        <p>See past and current employess.</p>
                        <Link to="/employeelogs" className="btn btn-secondary">employee Logs</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
