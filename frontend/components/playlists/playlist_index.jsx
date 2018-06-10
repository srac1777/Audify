import React from 'react';
import PlaylistIndexItem from './playlist_index_item';
import PlaylistFormContainer from './playlist_form_container';
import Modal from '../modal/modal_np';
import {NavLink} from 'react-router-dom';

class PlaylistIndex extends React.Component {
    
    componentDidMount() {
        this.props.fetchPlaylists();
    }

    handleClick() {
        this.props.openModal('np')
    }
    
    render() {
        console.log(this.props.playlists);
        
        return (
            <div className="full-playlists-index">
                <div className="container">
                    <Modal closeModal={this.props.closeModal} modal={'np'}/>
                    <div className="main-nav">
                        <div className="nav-link-items"><NavLink to="/home/songs" activeClassName="active-nav"><a className="nav-text">Songs</a><div className="active-underline"></div></NavLink></div>
                        <div className="nav-link-items"><NavLink to="/home" activeClassName="active-nav"><a className="nav-text">Playlists</a><div className="active-underline"></div></NavLink></div>
                    </div>
                    <div className="np-button-container"><button className="new-playlist-button" onClick={this.handleClick.bind(this)}>New Playlist</button></div>

                </div>
                <div className="playlist-index-list-container">
                <ul>
                    {this.props.playlists.map(playlist => (<PlaylistIndexItem key={playlist.id} playlist={playlist} />))}
                </ul>
                </div>
                
          </div>
        );
    }
}
export default PlaylistIndex;


// componentWillReceiveProps(newProps){
//     if(this.props.playlists.length !== newProps.playlists.length){
//         this.props.fetchPlaylists()
//     }
// }
