import React from 'react';
import {Link} from 'react-router-dom';
import SongIndexItem from './songs_index_item';
import Modal from '../modal/modal';

class SongIndex extends React.Component {

    componentDidMount() {
        this.props.fetchSongs();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.songs.map(song => (<SongIndexItem key={song.id} 
                                                    song={song}
                                                    openModal={this.props.openModal}
                                                    songClick={this.props.songClick}
                                                    />))}
                </ul>
                <Modal />
            </div>
        );
    }
}

export default SongIndex;