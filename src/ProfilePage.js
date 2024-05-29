// React component for the profile page

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProfilePage({ match }) {
    const [userData, setUserData] = useState(null);
    const username = match.params.username;

    useEffect(() => {
        // Fetch user data when the component mounts
        fetchUserData();
    }, [username]); // Re-fetch data when username changes

    const fetchUserData = () => {
        axios.get(`http://localhost:8080/profile/${username}`)
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    };

    return (
        <div>
            <h2>User Profile</h2>
            {userData ? (
                <div>
                    <p><strong>Name:</strong> {userData.name}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Username:</strong> {userData.username}</p>
                    {/* Add other user data fields as needed */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ProfilePage;
