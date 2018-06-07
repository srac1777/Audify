import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'LOG IN',
    // navLink: <Link to="/signup">sign up instead</Link>,
});

const mapDispatchToProps = dispatch => ({
    submitForm: user => dispatch(login(user)),
    demoLogin: user => dispatch(login(user)),
    clearErrors: errors => dispatch(receiveErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);