import React from 'react';
import { Link } from 'react-router-dom';

class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li >
                {this.props.song.title} &nbsp;
                <Link to="/songs/addtoplaylist">Add to Playlist</Link>
            </li>
        );
    }
}

export default SongIndexItem;