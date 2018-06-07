import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li >
                <Link to={`/playlists/${this.props.playlist.id}`}>{this.props.playlist.title}</Link>
            </li>
        );
    }
}

export default PlaylistIndexItem;