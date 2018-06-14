import React from 'react';
import { Link } from 'react-router-dom';

class SRIndexItem extends React.Component {


    render() {
        // let songs = this.props.playlist.songs
        // let img_src;
        // // console.log(this.props.playlist, "hhhasoidhfaosfoawgfawqefgjwoqgjf");
        // // console.log(songs, "hhhasoidhfaosfoawgfawqefgjwoqgjf");
        // if (typeof songs === 'undefined' || songs.join() === '') {
        //     img_src = "https://s3-us-west-1.amazonaws.com/audifymaster/fallback/no-pl-songs.png"
        // } else {
        //     img_src = songs[0].album_art
        // }
        return (
            <div>
                <li>
                    {this.props.result.content}
                </li>
            </div>
        );
    }
}

export default SRIndexItem;