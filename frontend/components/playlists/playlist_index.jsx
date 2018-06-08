import React from 'react';
import PlaylistIndexItem from './playlist_index_item';
import PlaylistFormContainer from './playlist_form_container';
import Modal from '../modal/modal_np';

class PlaylistIndex extends React.Component {
    
    componentDidMount() {
        this.props.fetchPlaylists();
    }

    handleClick() {
        this.props.openModal('np')
    }
    
    render() {
        return (
            <div>
                <ul>
                    {this.props.playlists.map(playlist => (<PlaylistIndexItem key={playlist.id} playlist={playlist} />))}
                </ul>
                <Modal />
                <button onClick={this.handleClick.bind(this)}>New Playlist</button>
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
