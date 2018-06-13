import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPlaylistSongs } from '../../utils/playlist_song_util';

class PlaylistSongsIndexItem extends React.Component {
    constructor(props) {
        super(props);
       this.green_nwpl = this.props.green_nwpl;
    }

    componentWillReceiveProps(newProps){
        // debugger
        if (this.props.now_pl_green !== newProps.now_pl_green){
            // debugger
            if (typeof newProps.now_pl_green === 'undefined'){
                this.green_nwpl = "";
            } else if (this.props.song.title === newProps.now_pl_green.title){
                // debugger
                this.green_nwpl = "apply-green-nwpl";
            } else this.green_nwpl = "";
        }
    }





        // if (typeof this.props.now_pl_green === 'undefined' || this.props.now_pl_green !== newProps.now_pl_green){
        //     this.green_nwpl = "apply-green-nwpl";
        // } else if {
        //         if(this.props.song.title === this.props.now_pl_green.title) {
        //         this.green_nwpl = "apply-green-nwpl";
        //     }
        // }
        // else this.green_nwpl = "";
        
    

    handleClick() {
        this.props.songClick(this.props.song)
        // this.props.openModal('atp')
    }

    handlePlayClick() {
        // debugger
        this.props.playNow(this.props.idx);
        this.props.nowPlayingQueue(this.props.current_songs_list);
    }

    handleDelete() {
        // console.log(this.props.playlist_songs)
        
        this.props.deletePlaylistSong({playlist_id: this.props.playlist.id, song_id: this.props.song.id})
    }

    // componentDidMount(){
    //     debugger
        
    //     if(typeof this.props.song !== 'undefined'){

    //         if (this.props.song.title === this.props.now_pl_green.title) {
    //             this.green_nwpl = "apply-green-nwpl";
    //         } else this.green_nwpl = "";
    //     }
    // }

    render() {
        // console.log(this.props);
        // if (typeof this.props.song !== 'undefined') {

        //     if (this.props.song.title === this.props.now_pl_green.title) {
        //         this.green_nwpl = "apply-green-nwpl";
        //     } else this.green_nwpl = "";
        // }
        // debugger
        return (
            <div className="right-pl-show">
                <li className="pl-each-song">
                    <div className="pl-song-first" onClick={this.handlePlayClick.bind(this)}>
                        <div className="music-note-icon"></div>
                        <div className="pl-song-title">
                            <div className={this.green_nwpl}>{this.props.song.title}</div>
                            <span className="pl-song-details">{this.props.song.artist_name}</span>
                            <span className="pl-artist-album-separator">•</span>
                            <span className="pl-song-details">{this.props.song.album_title}</span>

                        </div>
                    </div>
                    {/* {this.props.song.title} &nbsp; */}

                    {/* <button onClick={this.handleClick.bind(this)}>ATP</button> */}
                    <div>
                        <button className="remove-song-from-pl" onClick={this.handleDelete.bind(this)}><p className="rsfp-text">REMOVE</p></button>
                    </div>
                </li>
            </div>
        );
    }
}

export default PlaylistSongsIndexItem;