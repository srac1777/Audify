import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import LandingPage from './landing_page/landing_page';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import DemoPage from './temp/demo';
import { logout } from '../actions/session_actions';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

const App = () => (
    <div>
        <header>
        <Link to="/"><h1>Audify: Work in Progress</h1></Link>
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <ProtectedRoute exact path="/home" component={DemoPage} />
            <AuthRoute exact path="/" component={LandingPage} />
        </Switch>
    </div>
);

export default App;