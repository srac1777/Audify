import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import SongIndexItem from './songs_index_item';
import Modal from '../modal/modal_atp';

class SongIndex extends React.Component {

    componentDidMount() {
        // debugger
        this.props.fetchSongs();
    }

    handleClick() {
        this.props.openModal('np')
    }

    render() {
        return (
            <div>
                <div className="container2">
                    <div className="nav-left-filler"></div>
                    <div className="main-nav">
                        <div className="nav-link-items"><NavLink to="/home/songs" activeClassName="active-nav"><p className="nav-text">Songs</p><div className="active-underline"></div></NavLink></div>
                        <div className="nav-link-items"><NavLink exact to="/home" activeClassName="active-nav"><p className="nav-text">Playlists</p><div className="active-underline"></div></NavLink></div>
                    </div>
                    {/* <div className="np-button-container"></div> */}
                    <div><button className="new-playlist-button4" >New Playlist</button></div>
                </div>
                <div className="songs-index-items-container">
                <ul>
                    {this.props.songs.map((song,idx) => (<SongIndexItem key={song.id} 
                                                    song={song}
                                                    openModal={this.props.openModal}
                                                    closeModal={this.props.closeModal}
                                                    songClick={this.props.songClick}
                                                    playNow={this.props.playNow}
                                                    current_songs_list={this.props.songs}
                                                    nowPlayingQueue={this.props.nowPlayingQueue}
                                                    now_pl_green={this.props.now_pl_green}
                                                    />))}
                </ul>
                </div>
                <Modal closeModal={this.props.closeModal} modal={'atp'}/>
            </div>
        );
    }
}

export default SongIndex;