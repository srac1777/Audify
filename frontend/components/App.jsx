import React from 'react';
import { Route, Link, Switch, NavLink } from 'react-router-dom';
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
import SearchPage from './search/seach';
import LibraryPage from './library/library';
import Sidebar from './temp/sidebar';

const App = () => {
    // let st = props.store.getState();
    let landing_render, footer_render;
    let SidebarLinks, selected;
    // console.log(op, "hihiiihihi");

    
    return (<div className="AppComponent">
        <div className="inAppComponent">
            <div className="main-upper">
                {/* {landing_render} */}
                <div className="main-component"> 
                    <ProtectedRoute path="/" component={Sidebar}/>
                    <Switch>
                        <AuthRoute path="/login" component={LogInFormContainer} />
                        <AuthRoute path="/signup" component={SignUpFormContainer} />
                        <ProtectedRoute exact path="/home" component={HomePage} />
                        <ProtectedRoute exact path="/library" component={LibraryPage} />
                        <ProtectedRoute exact path="/search" component={SearchPage} />

                        <ProtectedRoute exact path="/playlists/:playlistId" component={PlaylistShowPage} />
                        <ProtectedRoute exact path="/songs/addtoplaylist" component={AddtoPlaylistContainer} />
                        <ProtectedRoute path="/home/songs" component={SongsIndex} />
                        <AuthRoute path="/" component={LandingPage} />
                    </Switch>
                </div>
            </div>
                <ProtectedRoute path="/" component={() => <div className="main-footer">footer</div>} />
                 
        </div>
        </div>)
};

export default App;