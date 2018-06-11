import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ current_user }) => {
    
    return (
        <div className="username">
            <div className="user-icon"></div>
            <div className="username-text">{current_user.username}</div>
        </div>
    )
};

export default User;
