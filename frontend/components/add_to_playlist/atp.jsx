import React from 'react';
import ATPIndex from './atp_index';

class AddtoPlaylist extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        // debugger
        return (
            <div>
                <h1>Choose a Playlist</h1>
                <ATPIndex playlists={this.props.playlists} 
                        fetchPlaylists={this.props.fetchPlaylists}
                        createPlaylistSong = {this.props.createPlaylistSong}
                        clickedSong={this.props.clickedSong}
                        closeModal={this.props.closeModal}
                        />
            </div>
        );
    }
}
export default AddtoPlaylist;