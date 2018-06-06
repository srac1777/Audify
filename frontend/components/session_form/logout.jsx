import React from 'react';
import { Link } from 'react-router-dom';

const Logout = ({ logout }) => {
    return (
        <hgroup >
            <button onClick={logout}>Log Out</button>
        </hgroup>)
};


export default Logout;