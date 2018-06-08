import React from 'react';
import { Link } from 'react-router-dom';

class ATPIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {playlist_id: '', song_id: ''}
    }

    handleClick(e){
        this.props.createPlaylistSong({ playlist_id: `${this.props.playlist.id}`, song_id: `${this.props.clickedSong.id}` })
        this.props.closeModal();
    }

    render() {
        return (
            <li onClick={this.handleClick.bind(this)}>
                {this.props.playlist.title}
            </li>
        );
    }
}

export default ATPIndexItem;