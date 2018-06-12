import { AuthRoute, ProtectedRoute } from '../../utils/route_util';
import React from 'react';
import { Route, Link, Switch, NavLink } from 'react-router-dom';
import LogoutContainer from '../session_form/logout_container';
import UserContainer from '../../components/temp/user_container';

const Sidebar = () => {
    // console.log(props.state);
    
    return (<div className="main-sidebar">
        <div>
            <div className="audify-logo"></div>
            <div className="side-links-container">
                <div><NavLink to="/search" className="side-links" activeClassName="active-side"><div className="search-icon"></div>Search</NavLink></div>
                <div><NavLink to="/home" className="side-links" activeClassName="active-side"><div className="home-icon"></div>Home</NavLink></div>
                <div><NavLink to="/library" className="side-links" activeClassName="active-side"><div className="library-icon"></div>Your Library</NavLink></div>
            </div>
        </div>
        <div className="side-user">
                <ProtectedRoute path="/home" component={UserContainer} />
                <ProtectedRoute path="/home" component={LogoutContainer} />
        </div>
    </div>
)
};

export default Sidebar;