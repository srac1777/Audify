import React from 'react';
import { Link } from 'react-router-dom';
import { debug } from 'util';

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
            debugger
            this.props.fetchSong(this.props.result.searchable_id).then( (songsa) => {
                // debugger
                this.setState({searchResultSong: songsa.song })
            }
            )
        

    }
}

    // componentWillReceiveProps(newProps){
    //     if(this.props.result !== newProps.result){
            
    //     }
    // }

    render() {
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

        // debugger
        return (
            <div>
                <li>
                    {this.state.searchResultPlaylist.title}
                    {this.state.searchResultSong.title}
                    {/* hi{searchResultSong.title}hello{searchResultSong.duration} */}
                </li>
            </div>
        );
    }
}

export default SRIndexItem;