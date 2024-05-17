import React from 'react';
import { Link } from 'react-router-dom';

function ViewEmployees() {
    return (
        <div>
            <h2>View Employees</h2>
            {/* Add logic to fetch and display the list of employees */}
            <Link to="/home" className="btn btn-primary">Back to Home</Link>
        </div>
    );
}

export default ViewEmployees;
