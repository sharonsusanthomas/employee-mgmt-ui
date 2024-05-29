// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleLogout = () => {
        const confirmLogout = window.confirm('Are you sure you want to log out?');
        if (confirmLogout) {
            localStorage.removeItem('token');
            localStorage.removeItem('username'); // Clear username from local storage
            window.location.href = '/';
        }
    };

    const openProfile = () => {
        setIsProfileOpen(true);
    };

    const closeProfile = () => {
        setIsProfileOpen(false);
    };

    const username = localStorage.getItem('username');

    return (
        <header>
            <h1>Employee Management System</h1>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/add-employee">Add Employee</Link>
                <Link to="/view-employees">View Employees</Link>
                {username && (
                    <>
                        <div className="profile-section">
                            <span>Welcome, {username}</span>
                            <button onClick={openProfile}>Profile</button>
                        </div>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                )}
            </nav>

            <div className={`sidenav ${isProfileOpen ? 'open' : ''}`} style={{ width: isProfileOpen ? '250px' : '0' }}>
                <button className="closebtn" onClick={closeProfile}>&times;</button>
                <span><big>Welcome, {username}</big></span>
                <a href="/profile">View Profile</a>
                <a href="/settings">Settings</a>
                <a><button onClick={handleLogout}>Logout</button></a>
            </div>
        </header>
    );
}

export default Header;
