import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import SongIndexItem from './songs_index_item';
import Modal from '../modal/modal_atp';

class SongIndex extends React.Component {

    componentDidMount() {
        this.props.fetchSongs();
    }

    handleClick() {
        this.props.openModal('np')
    }

    render() {
        return (
            <div>
                <div className="container2">
                    <div className="main-nav">
                        <div className="nav-link-items"><NavLink to="/home/songs" activeClassName="active-nav"><a className="nav-text">Songs</a><div className="active-underline"></div></NavLink></div>
                        <div className="nav-link-items"><NavLink exact to="/home" activeClassName="active-nav"><a className="nav-text">Playlists</a><div className="active-underline"></div></NavLink></div>
                    </div>
                    <div className="np-button-container"><button className="new-playlist-button2" onClick={this.handleClick.bind(this)}>New Playlist</button></div>

                </div>
                <div className="songs-index-items-container">
                <ul>
                    {this.props.songs.map(song => (<SongIndexItem key={song.id} 
                                                    song={song}
                                                    openModal={this.props.openModal}
                                                    songClick={this.props.songClick}
                                                    />))}
                </ul>
                </div>
                <Modal />
            </div>
        );
    }
}

export default SongIndex;