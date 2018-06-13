import { connect } from 'react-redux';
import React from 'react';

import Sidebar from './sidebar';

const mapStateToProps = state => ({
    now_playing: state.now_playing_queue[state.now_playing] || ''
    // navLink: <Link to="/login">log in instead</Link>,
});

export default connect(mapStateToProps, null)(Sidebar);