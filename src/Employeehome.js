import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Employeehome.css';

function Employeehome() {
    const [profileOpen, setProfileOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const [totalEvents, setTotalEvents] = useState(0);
    const [collaborations, setCollaborations] = useState([]);

    useEffect(() => {
        // Fetch events and collaborations data for the employee
        axios.get('http://localhost:8081/employee/events')
            .then(response => {
                setEvents(response.data.events);
                setTotalEvents(response.data.totalEvents);
                setCollaborations(response.data.collaborations);
            })
            .catch(error => {
                console.error("There was an error fetching the events!", error);
            });
    }, []);

    const toggleProfile = () => {
        setProfileOpen(!profileOpen);
    };

    return (
        <div className='employee-home'>
            <div className={`profile-sidebar ${profileOpen ? 'open' : ''}`}>
                <button onClick={toggleProfile} className='close-btn'>X</button>
                <div className='profile-content'>
                    <h2>Profile</h2>
                    <p>Username: {/* Insert username here */}</p>
                    <p>Email: {/* Insert email here */}</p>
                    {/* Add more profile details as needed */}
                </div>
            </div>
            <div className='main-content'>
                <button onClick={toggleProfile} className='profile-btn'>Profile</button>
                <div className='header'>
                    <h1>Employee Dashboard</h1>
                    <div className='total-events'>
                        <strong>Total Events Organized: {totalEvents}</strong>
                    </div>
                </div>
                <div className='events-section'>
                    <h2>Upcoming Events</h2>
                    <ul>
                        {events.filter(event => !event.documentsMissing).map(event => (
                            <li key={event.id}>{event.name} - {event.date}</li>
                        ))}
                    </ul>
                </div>
                <div className='missing-docs-section'>
                    <h2>Events Missing Documents</h2>
                    <ul>
                        {events.filter(event => event.documentsMissing).map(event => (
                            <li key={event.id}>{event.name} - {event.date}</li>
                        ))}
                    </ul>
                </div>
                <div className='collaborations-section'>
                    <h2>Collaborations</h2>
                    <ul>
                        {collaborations.map(collaboration => (
                            <li key={collaboration.id}>
                                {collaboration.eventName} with {collaboration.collaboratorName}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Employeehome;
