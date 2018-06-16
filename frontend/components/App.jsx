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
import SearchPage from './search/search_container';
import BrowsePageContainer from './browse/browse_container';
import Sidebar from './temp/sidebar';
import PlayerContainer from './player/player_container';
import sidebar_container from './temp/sidebar_container';
import devPage from './temp/devpage';


const App = ({store}) => {
    let landing_render, footer_render;
    let SidebarLinks, selected;

    
    return (<div className="AppComponent">
        <div className="inAppComponent">
            <div className="main-upper">
                {/* {landing_render} */}
                <div className="main-component"> 
                    <ProtectedRoute path="/" component={sidebar_container}/>
                    <Switch>
                        <AuthRoute path="/login" component={LogInFormContainer} />
                        <AuthRoute path="/signup" component={SignUpFormContainer} />
                        <ProtectedRoute exact path="/aboutme" component={devPage} />
                        <ProtectedRoute exact path="/home" component={HomePage} />
                        <ProtectedRoute exact path="/browse" component={BrowsePageContainer} />
                        <ProtectedRoute exact path="/search" component={SearchPage} />
                        <ProtectedRoute exact path="/playlists/:playlistId" component={PlaylistShowPage} />
                        <ProtectedRoute exact path="/songs/addtoplaylist" component={AddtoPlaylistContainer} />
                        <ProtectedRoute path="/home/songs" component={SongsIndex} />
                        <AuthRoute path="/" component={LandingPage} />
                    </Switch>
                </div>
                <ProtectedRoute path="/" component={PlayerContainer} />
            </div>
                 
        </div>
        </div>)
};

export default App;