import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
    render(){
        return (
            <div className="AllLanding">
            <div className="landing">
                <div className="left-landing">
                <div className="landing-logo"></div>
                <Link to="/signup" className="link1">SIGN UP</Link>
                <p>- ALREADY HAVE AN ACCOUNT? -</p>
                <Link to="/login" className="link2">LOG IN</Link>
                </div>
                <div className="middle-landing-bar"></div>
                <div className="right-landing">
                    <h1>Get the right music, <br/>
                        right now</h1>
                    <h3>Listen to millions of songs for free.</h3>
                    <ul>
                        <li><div className="landing-tick"></div><span className="ticktext">Search & discover music you'll love</span></li>
                        <li><div className="landing-tick"></div><span className="ticktext">Create playlists of your favorite music</span></li>
                    </ul>
                </div>
            </div>
            </div>
        );
    }
}

export default LandingPage;