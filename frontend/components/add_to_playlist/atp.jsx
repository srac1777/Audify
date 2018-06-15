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
                <div className="modal-atp-x"><button onClick={() => this.props.closeModal()}>x</button></div>
                <div className="choose-playlist"><h1>Add to playlist</h1></div>
                <div className="atp-index-container"><ATPIndex playlists={this.props.playlists} 
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