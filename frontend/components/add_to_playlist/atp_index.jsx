import React from 'react';
import ATPIndexItem from './atp_index_items';

class ATPIndex extends React.Component {

    componentDidMount() {
        this.props.fetchPlaylists();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.playlists.map(playlist => (<ATPIndexItem key={playlist.id} 
                                                                        playlist={playlist} 
                                                                        createPlaylistSong={this.props.createPlaylistSong} 
                                                                        clickedSong={this.props.clickedSong}
                                                                        closeModal={this.props.closeModal}
                                                                        updatePlaylist={this.props.updatePlaylist}
                                                                        />))}
                </ul>
            </div>
        );
    }
}
export default ATPIndex;