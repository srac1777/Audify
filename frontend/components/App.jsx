import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import LandingPage from './landing_page/landing_page';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import PlaylistShowPage from './playlists/playlist_show_container';
import LogoutContainer from './session_form/logout_container';
import UserContainer from './temp/user_container';
import HomePage from './temp/home';
import SongsIndex from './songs/songs_index_container';
import AddtoPlaylistContainer from './add_to_playlist/atp_container';
import { logout } from '../actions/session_actions';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import { fetchSongs } from '../actions/song_actions';

const App = ({store}) => {
    let st = store.getState();
    let landing_render, footer_render;
    // console.log(st, "hihiiihihi");
    if(st.session.currentUser){
        landing_render = (<div className="main-sidebar"><div className="audify-logo"></div>&nbsp;<LogoutContainer />&nbsp;<UserContainer /></div>)
        footer_render = (<div className="main-footer">footer</div>)
    } else {
        landing_render = (<div></div>)
        footer_render = (<div></div>)
    }
    
    return (<div className="AppComponent">
        <div className="inAppComponent">
            <div className="main-upper">
                {landing_render}
                <div className="main-component"> 
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
            </div>
            {footer_render}
            
          
            </div>
        </div>)
};

export default App;