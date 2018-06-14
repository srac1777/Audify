import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(newProps){

    }

    render() {
        let songs = this.props.playlist.songs
        let img_src;
        // console.log(this.props.playlist, "hhhasoidhfaosfoawgfawqefgjwoqgjf");
        // console.log(songs, "hhhasoidhfaosfoawgfawqefgjwoqgjf");
        if (typeof songs === 'undefined' || songs.join() === ''){
            img_src = "https://s3-us-west-1.amazonaws.com/audifymaster/fallback/no-pl-songs.png"
        } else {
            img_src = songs[0].album_art
        }

        
        return (
            <div>
                <li>
                    <Link to={`/playlists/${this.props.playlist.id}`}>{<div className="overlay-gradient-pl"><img className="album-art-pl-index effect2" src={img_src}></img></div>}<p className="playlist-title-index-page">{this.props.playlist.title}</p></Link>
                </li>
            </div>
        );
    }
}

export default PlaylistIndexItem;