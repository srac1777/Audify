import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistSongsIndexItem from '../songs/pl_songs_index_item';

class SRIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchResultPlaylist: this.props.playlists[this.props.result.searchable_id] || '',
            searchResultSong: ''
        }
        this.songs_arr = [];
    }
    componentDidMount(){
        // this.props.fetchSongs()
        if (this.props.result.searchable_type === 'Playlist') {
            // debugger
            // let playlistsa = this.props.playlists 
            this.props.fetchPlaylist(this.props.result.searchable_id).then((playlistsa) => {
                // debugger
                this.setState({ searchResultPlaylist: playlistsa.playlist })
            }
            )
            
        } else if (this.props.result.searchable_type === 'Song') {
            // debugger
            this.props.fetchSong(this.props.result.searchable_id).then( (songsa) => {
                // debugger
                this.setState({searchResultSong: songsa.song })
            }
            )
        

    }
    }

    // componentWillUnmount(){
    //     this.setState({ searchResultPlaylist: '', searchResultSong: ''})
    // }

    // componentWillReceiveProps(newProps){
    //     if(this.props.result !== newProps.result){
            
    //     }
    // }

    render() {
        let songs_render; 
        let playlist_render;
        // let songs = this.props.playlist.songs
        // let img_src;
        // // console.log(this.props.playlist, "hhhasoidhfaosfoawgfawqefgjwoqgjf");
        // // console.log(songs, "hhhasoidhfaosfoawgfawqefgjwoqgjf");
        // if (typeof songs === 'undefined' || songs.join() === '') {
        //     img_src = "https://s3-us-west-1.amazonaws.com/audifymaster/fallback/no-pl-songs.png"
        // } else {
        //     img_src = songs[0].album_art
        // }
        // let searchResultPlaylist;
        // let searchResultSong;

        // if (this.props.result.searchable_type === 'Playlist') {
        //     searchResultPlaylist = this.props.fetchPlaylist(this.props.result.searchable_id)
        // } else {
        //     debugger
        //      searchResultSong = this.props.songs[this.props.result.searchable_id]
        // }

        if (this.state.searchResultPlaylist === '' && this.state.searchResultSong === ''){
            return <div>hello</div>
        }

        if(this.state.searchResultPlaylist === ''){
            // debugger
            playlist_render = <p></p>
        } else {
            playlist_render = (<Link to={`/playlists/${this.state.searchResultPlaylist.id}`}><img src={this.state.searchResultPlaylist.album_art}></img>{this.state.searchResultPlaylist.title}</Link>)
        }

        if(this.state.searchResultSong === ''){
            songs_render = <p></p>
        } else {
            songs_render = (<PlaylistSongsIndexItem

                song={this.state.searchResultSong}
                idx={this.props.send_key}
                playlist={this.props.playlist}
                playNow={this.props.playNow}
                current_songs_list={[this.state.searchResultSong]}
                nowPlayingQueue={this.props.nowPlayingQueue}
                now_pl_green={this.props.now_pl_green}
            />)
        }


        // debugger
        // debugger
        return (
            <div>
                <li>
                    <div>{playlist_render}</div>
                    <div>{songs_render}</div>
                    
                    {/* hi{searchResultSong.title}hello{searchResultSong.duration} */}
                </li>
            </div>
        );
    }
}

export default SRIndexItem;