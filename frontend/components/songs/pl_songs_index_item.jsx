import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPlaylistSongs } from '../../utils/playlist_song_util';

class PlaylistSongsIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(newProps){
        // debugger
        // if(newProps.)
    }

    handleClick() {
        this.props.songClick(this.props.song)
        this.props.openModal('atp')
    }

    handleDelete() {
        // console.log(this.props.playlist_songs)
        
        this.props.deletePlaylistSong({playlist_id: this.props.playlist.id, song_id: this.props.song.id})
    }

    render() {
        console.log(this.props.song);
        
        return (
            <li >
                
                {this.props.song.title} &nbsp;

                {/* <button onClick={this.handleClick.bind(this)}>ATP</button> */}
                <button onClick={this.handleDelete.bind(this)}>Remove from Playlist</button>
            </li>
        );
    }
}

export default PlaylistSongsIndexItem;