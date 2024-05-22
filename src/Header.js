import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header>
            <h1>Employee Management System</h1>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/add-employee">Add Employee</Link>
                <Link to="/view-employees">View Employees</Link>
            </nav>
        </header>
    );
}

export default Header;
