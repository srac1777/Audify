import React from 'react';
import { Link } from 'react-router-dom';
import { debug } from 'util';

class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {now_playing_song: ''}
    }

    handleClick(){
        // console.log(this.props);
        
        // debugger
        this.props.songClick(this.props.song);
        // debugger

        this.props.openModal('atp');
    }

    handlePlayClick(){
        // debugger
        this.props.playNow(this.props.song.id-1);
        this.props.nowPlayingQueue(this.props.current_songs_list);
    }

    myFunction(){
        // console.log("button clicked");
        document.getElementById(`myDropdown${this.props.song.id}`).classList.toggle("show");
    }

    prettyTime(time) {
        let minutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);
        if (seconds < 10) {
            seconds = '0' + seconds
        }
        let finalTime = minutes + ':' + seconds;
        return finalTime;
    }

 

    render() {
        // console.log(this.props.next_song);
        let green_nwpl;
        if(this.props.song.title === this.props.now_pl_green.title){
            green_nwpl = "apply-green-nwpl";
        } else green_nwpl = "";
        
        return (
            <li className="each-song" >
                
                <div className="song-first" onClick={this.handlePlayClick.bind(this)}>
                    <div className="music-note-icon"></div>
                    <div className="song-title">
                        <div className={green_nwpl}>{this.props.song.title}</div>
                        <span className="song-details">{this.props.song.artist_name}</span>
                        <span className="artist-album-separator">•</span>
                        <span className="song-details">{this.props.song.album_title}</span>
                    
                    </div>
                </div>
                {/* {this.props.song.album_id} */}
                {/* <Link to="/songs/addtoplaylist">Add to Playlist</Link> */}
                <div className="left-song">
                <div className="dropdown">
                    <button onClick={this.myFunction.bind(this)} className="dropbtn">•••</button>
                    <div id={`myDropdown${this.props.song.id}`} className="dropdown-content">
                
                       <a> <button className="atp-button-fix" onClick={this.handleClick.bind(this)}>Add to Playlist</button></a>
                    </div>
                </div>
                    <div className="dur">{this.prettyTime(this.props.song.duration)}</div>
                </div>
                {/* <div><button onClick={this.handleClick.bind(this)}>ATP</button></div> */}
            </li>
        );
    }
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


export default SongIndexItem;