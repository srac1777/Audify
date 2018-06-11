import React from 'react';
import { Link } from 'react-router-dom';
import { debug } from 'util';

class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(){
        console.log(this.props);
        
        // debugger
        this.props.songClick(this.props.song);
        // debugger

        this.props.openModal('atp');
    }

    myFunction(){
        // console.log("button clicked");
        document.getElementById(`myDropdown${this.props.song.id}`).classList.toggle("show");
    }

 

    render() {
        console.log(this.props.song);
        
        return (
            <li className="each-song">
                
                <div className="song-first"><div className="music-note-icon"></div>
                    <div className="song-title">
                    <div>{this.props.song.title}</div>
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
                <div className="dur">{Math.floor(this.props.song.duration/60)}:{this.props.song.duration%60}</div>
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