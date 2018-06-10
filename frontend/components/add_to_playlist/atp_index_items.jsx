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
        return (
            <div className="atp-li"><li onClick={this.handleClick.bind(this)}>
                {this.props.playlist.title}
            </li></div>
        );
    }
}

export default ATPIndexItem;