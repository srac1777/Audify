import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistSongsIndexItem from '../songs/pl_songs_index_item';
import Modal from '../modal/modal_ep';
import Modal2 from '../modal/modal_dp';

class PlaylistShow extends React.Component {
    constructor(props){
        super(props);
        // this.ownProps = ownProps;
        // this.playlist = this.props.fetchPlaylist(props.ownProps.params.match.playlistId)
    }
    componentWillMount(){
        // console.log("in will");
        
        this.props.fetchPlaylists().then(this.props.fetchSongs).then(this.props.fetchPlaylistSongs)
        // this.props.fetchPlaylist(this.props.ownProps.match.params.playlistId)
        // this.props.fetchPlaylistSongs();
    }

    componentDidMount(){
        // debugger
    }

    componentWillReceiveProps(newProps) {
        // debugger
        // if(newProps.)
    }

    handleEdit() {
        this.props.openModal('ep');
    }

    handleDelete(){
        // // console.log(this.props.history)
        // this.props.deletePlaylist(this.props.playlist.id);
        // this.props.history.push('/home');
        this.props.openModal('dp');
    }

    handleFollow(){
        // let cpf = {user_id:  }
        // debugger
        this.props.createPlaylistFollower(this.props.playlist.id)
    }

    handleUnfollow() {
        this.props.deletePlaylistFollower({playlist_id: this.props.playlist.id, user_id: this.props.currentUser.id})
    }
    
    render() {
        // console.log(this.props.playlist, "hiiiiiiiii");
        // debugger
        if(typeof this.props.playlist === 'undefined'){
            console.log("undeffffff");
            return (<div>hello</div>);
        }
        let songs = this.props.playlist.songs;
        let img_src;
        if (typeof songs === 'undefined' || songs.join() === '') {
            img_src = "https://s3-us-west-1.amazonaws.com/audifymaster/fallback/no-pl-songs.png"
        } else {
            img_src = songs[0].album_art
        }
        return (
            <div className="playlist-show">
                   {/* <Modal /> */}
                   <Modal2 playlist={this.props.playlist}/>
        
                   <div className="left-pl-show">
                        <div><img className="pl-show-img" src={img_src}></img></div>
                        <div className="pl-show-title">{this.props.playlist.title}</div>
                        <div className="pl-show-left-buttons">
                            <div><button className="pl-rename-button" onClick={this.handleEdit.bind(this)}>rename</button></div>
                            <div><button className="delete-pl-button" onClick={this.handleDelete.bind(this)}>Delete</button></div>
                            <div><button className="pl-rename-button" onClick={this.handleFollow.bind(this)}>Follow</button></div>
                            <div><button className="pl-rename-button" onClick={this.handleUnfollow.bind(this)}>Unfollow</button></div>
                        </div>
                    </div>
               <div className="pl-songs-container"><ul>
                    {this.props.songs.map((song,idx) => (<PlaylistSongsIndexItem key={song.id} 
                                                                deletePlaylistSong={this.props.deletePlaylistSong}
                                                                playlist_songs={this.props.playlist_songs}
                                                                current_playlist={this.props.playlist}
                                                                song={song}
                                                                idx={idx}
                                                                playlist={this.props.playlist}
                                                                playNow={this.props.playNow}
                                                                current_songs_list={this.props.songs}
                                                                nowPlayingQueue={this.props.nowPlayingQueue}
                                                                now_pl_green={this.props.now_pl_green}
                                                                />))}
                </ul></div>

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