import React from 'react';
import { Link } from 'react-router-dom';

const Logout = ({ logout }) => {
    return (
        <div className="lb-container">
            <div><button className="logout-button" onClick={logout}>Log Out</button></div>
        </div>)
};


export default Logout;