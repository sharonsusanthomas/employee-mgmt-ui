import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const handleLogout = () => {
        const confirmLogout = window.confirm('Are you sure you want to log out?');
        if (confirmLogout) {
            // Perform logout logic here (e.g., clearing local storage, redirecting to login page)
            // For example:
            localStorage.removeItem('token'); // Remove the token or any other user-related data from local storage
            window.location.href = '/login'; // Redirect to the login page
        }
    };

    return (
        <header>
            <h1>Employee Management System</h1>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/add-employee">Add Employee</Link>
                <Link to="/view-employees">View Employees</Link>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </header>
    );
}

export default Header;
