import React from 'react';
import { Link } from 'react-router-dom';

class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(){
        this.props.songClick(this.props.song)
        this.props.openModal('atp')
    }

    render() {
        return (
            <li >
                {this.props.song.title} &nbsp;
                {/* <Link to="/songs/addtoplaylist">Add to Playlist</Link> */}
                
                <button onClick={this.handleClick.bind(this)}>ATP</button>
            </li>
        );
    }
}

export default SongIndexItem;