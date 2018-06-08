import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistSongsIndexItem from '../songs/pl_songs_index_item';
import Modal from '../modal/modal_ep';

class PlaylistShow extends React.Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.fetchSongs().then(this.props.fetchPlaylistSongs)
        // this.props.fetchPlaylistSongs();
    }

    componentWillReceiveProps(newProps) {
        debugger
        // if(newProps.)
    }

    handleClick() {
        this.props.openModal('ep');
    }

    handleDelete(){
        // console.log(this.props.history)
        this.props.deletePlaylist(this.props.playlist.id);
        this.props.history.push('/home');
    }
    
    render() {
        // console.log(this.props.songs);
        
        return (
            <div>
                {this.props.playlist.title}
                <ul>
                    {this.props.songs.map(song => (<PlaylistSongsIndexItem key={song.id} 
                                                                deletePlaylistSong={this.props.deletePlaylistSong}
                                                                playlist_songs={this.props.playlist_songs}
                                                                current_playlist={this.props.playlist}
                                                                song={song}
                                                                playlist={this.props.playlist}
                                                                />))}
                </ul>

                <Modal />
                <button onClick={this.handleClick.bind(this)}>rename</button>
                <button onClick={this.handleDelete.bind(this)}>delete playlist</button>
            </div>
        );
    }
}

export default PlaylistShow;







// componentWillReceiveProps(nextProps) {
//     if (this.props.post.id != nextProps.match.params.postId) {
//         this.props.fetchPost(nextProps.match.params.postId);
//     }
// }