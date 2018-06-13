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
        // this.props.openModal('atp')
    }

    handlePlayClick() {
        // debugger
        this.props.playNow(this.props.idx);
        this.props.nowPlayingQueue(this.props.current_songs_list);
    }

    handleDelete() {
        // console.log(this.props.playlist_songs)
        
        this.props.deletePlaylistSong({playlist_id: this.props.playlist.id, song_id: this.props.song.id})
    }

    render() {
        // console.log(this.props);
        
        return (
            <div className="right-pl-show">
                <li className="pl-each-song">
                    <div className="pl-song-first" onClick={this.handlePlayClick.bind(this)}>
                        <div className="music-note-icon"></div>
                        <div className="pl-song-title">
                            <div>{this.props.song.title}</div>
                            <span className="pl-song-details">{this.props.song.artist_name}</span>
                            <span className="pl-artist-album-separator">•</span>
                            <span className="pl-song-details">{this.props.song.album_title}</span>

                        </div>
                    </div>
                    {/* {this.props.song.title} &nbsp; */}

                    {/* <button onClick={this.handleClick.bind(this)}>ATP</button> */}
                    <div>
                        <button className="remove-song-from-pl" onClick={this.handleDelete.bind(this)}><p className="rsfp-text">REMOVE</p></button>
                    </div>
                </li>
            </div>
        );
    }
}

export default PlaylistSongsIndexItem;