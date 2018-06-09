import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ current_user }) => {
    
    return (
        <h2>Welcome {current_user.username}</h2>)
};

export default User;
