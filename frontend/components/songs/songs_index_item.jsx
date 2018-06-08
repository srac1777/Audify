import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';

class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li >
                {this.props.song.title} &nbsp;
                <Link to="/songs/addtoplaylist">Add to Playlist</Link>
                
                <button onClick={() => this.props.openModal('atp')}>ATP</button>
            </li>
        );
    }
}

export default SongIndexItem;