import React from 'react';
import { Link } from 'react-router-dom';

class ATPIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {playlist_id: '', song_id: ''}
    }

    handleClick(e){
        // let arr = this.props.playlist.song_ids
        // arr.push(this.props.clickedSong.id)
        // this.props.updatePlaylist(this.props.playlist);
        this.props.createPlaylistSong({ playlist_id: `${this.props.playlist.id}`, song_id: `${this.props.clickedSong.id}` })
        this.props.closeModal();
    }

    render() {
        let songs = this.props.playlist.songs
        let img_src;
        // console.log(this.props.playlist, "hhhasoidhfaosfoawgfawqefgjwoqgjf");
        // console.log(songs, "hhhasoidhfaosfoawgfawqefgjwoqgjf");
        if (typeof songs === 'undefined' || songs.join() === '') {
            img_src = "https://s3-us-west-1.amazonaws.com/audifymaster/fallback/no-pl-songs.png"
        } else {
            img_src = songs[0].album_art
        }

        return (
            <div className="atp-li">
                <li className="atp-li-li" onClick={this.handleClick.bind(this)}>
                    <div className="overlay-gradient-pl"><img className="atp-album-art-pl-index" src={img_src}></img></div>
                    <div className="atp-text">{this.props.playlist.title}</div>
                </li>
            </div>
        );
    }
}

export default ATPIndexItem;