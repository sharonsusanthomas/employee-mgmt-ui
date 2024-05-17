import React from 'react';
import { Link } from 'react-router-dom';

function AddEmployee() {
    return (
        <div>
            <h2>Add Employee</h2>
            {/* Add form to add an employee */}
            <Link to="/home" className="btn btn-primary">Back to Home</Link>
        </div>
    );
}

export default AddEmployee;
