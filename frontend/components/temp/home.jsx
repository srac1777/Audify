import React from 'react';
// import LogoutContainer from '../session_form/logout_container';
// import UserContainer from '../temp/user_container';
import PlaylistIndexContainer from '../playlists/playlist_index_container';

class HomePage extends React.Component {
    render() {
        return (
            <div className="homePlaylistIndex">
                {/* <LogoutContainer /> */}
                {/* <UserContainer /> */}
                {/* You are logged in! */}
                <PlaylistIndexContainer />
            </div>
        );
    }
}

export default HomePage;