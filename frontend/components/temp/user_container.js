import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import User from './user';

const mapStateToProps = state => ({
    current_user: state.session.currentUser
    // navLink: <Link to="/login">log in instead</Link>,
});

export default connect(mapStateToProps, null)(User);