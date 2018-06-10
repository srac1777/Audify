import React from 'react';
import ATPIndex from './atp_index';

class AddtoPlaylist extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        // debugger
        return (
            <div className="ModalATP">
                <div className="choose-playlist"><h1>Choose a Playlist</h1></div>
                <div><ATPIndex playlists={this.props.playlists} 
                        fetchPlaylists={this.props.fetchPlaylists}
                        createPlaylistSong = {this.props.createPlaylistSong}
                        clickedSong={this.props.clickedSong}
                        closeModal={this.props.closeModal}
                        />
                </div>
            </div>
        );
    }
}
export default AddtoPlaylist;