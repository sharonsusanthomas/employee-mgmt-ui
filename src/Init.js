import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import addImage from './add.png';
import updateImage from './update.jpg';
import viewImage from './view.jpg';
// import backgroundImage from './background.jpg';

function Init() {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Employee Management System</h1>
                <p>Manage your company's employee information efficiently!</p>
                <br />
                <Link to="/login" className="btn btn-primary">Get Started</Link>
            </div>
        </div>
    );
}

export default Init;