import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmployeeLogs.css'; // Import CSS file
import Header from './Header';
import Footer from './Footer';

function EmployeeLogs() {
    const [activeEmployees, setActiveEmployees] = useState(0);
    const [inactiveEmployees, setInactiveEmployees] = useState(0);
    const [loggedInUsers, setLoggedInUsers] = useState(0);

    useEffect(() => {
        // Fetch data when the component mounts
        fetchData();
    }, []);

    const fetchData = () => {
        // Fetch number of active employees
        axios.get('http://localhost:8081/activeEmployees')
            .then(response => {
                setActiveEmployees(response.data);
            })
            .catch(error => {
                console.error('Error fetching active employees:', error);
            });

        // Fetch number of inactive employees
        axios.get('http://localhost:8081/inactiveEmployees')
            .then(response => {
                setInactiveEmployees(response.data);
            })
            .catch(error => {
                console.error('Error fetching inactive employees:', error);
            });

        // Fetch number of logged in users
        axios.get('http://localhost:8081/loggedInUsers')
            .then(response => {
                setLoggedInUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching logged in users:', error);
            });
    };

    return (
        <><><Header /><div className="employee-logs-container">
            <h2>Employee Logs</h2>
            <div className="log-item">
                <h3>Active Employees: {activeEmployees}</h3>
            </div>
            <div className="log-item">
                <h3>Inactive Employees: {inactiveEmployees}</h3>
            </div>
            <div className="log-item">
                <h3>Logged In Users: {loggedInUsers}</h3>
            </div>
        </div></><Footer /></>
    );
}

export default EmployeeLogs;
