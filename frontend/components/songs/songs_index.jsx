import React from 'react';
import {Link} from 'react-router-dom';
import SongIndexItem from './songs_index_item';

class SongIndex extends React.Component {

    componentDidMount() {
        this.props.fetchSongs();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.songs.map(song => (<SongIndexItem key={song.id} song={song} />))}
                </ul>
            </div>
        );
    }
}

export default SongIndex;