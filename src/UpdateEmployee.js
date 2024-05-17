import React from 'react';
import { Link } from 'react-router-dom';

function UpdateEmployee() {
    return (
        <div>
            <h2>Update Employee</h2>
            {/* Add form to update employee details */}
            <Link to="/home" className="btn btn-primary">Back to Home</Link>
        </div>
    );
}

export default UpdateEmployee;
