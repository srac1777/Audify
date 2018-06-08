import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistSongsIndexItem from './pl_songs_index_item';
import Modal from '../modal/modal_atp';

class SongIndex extends React.Component {

    componentDidMount() {
        this.props.fetchSongs();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.songs.map(song => (<PlaylistSongsIndexItem key={song.id}
                        song={song}
                        deletePlaylistSong={this.props.deletePlaylistSong}
                        playlist_songs={this.props.playlist_songs}
                    />))}
                </ul>
                <Modal />
            </div>
        );
    }
}

export default PlaylistSongsIndex;