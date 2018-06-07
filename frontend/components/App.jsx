import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import LandingPage from './landing_page/landing_page';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import PlaylistShowPage from './playlists/playlist_show_container';
import HomePage from './temp/home';
import SongsIndex from './songs/songs_index_container';
import AddtoPlaylistContainer from './add_to_playlist/add_to_playlist_container';
import { logout } from '../actions/session_actions';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

const App = () => (
    <div className="AppComponent">
            
        <Switch>
            <AuthRoute path="/login" component={LogInFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <ProtectedRoute exact path="/home" component={HomePage} />
            <ProtectedRoute exact path="/playlists/:playlistId" component={PlaylistShowPage} />
            <ProtectedRoute exact path="/songs/addtoplaylist" component={AddtoPlaylistContainer} />
            <ProtectedRoute path="/songs" component={SongsIndex} />
            <AuthRoute path="/" component={LandingPage} />
        </Switch>
    </div>
);

export default App;