import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistSongsIndexItem from './pl_songs_index_item';
import Modal from '../modal/modal_atp';

class PlaylistSongsIndex extends React.Component {

    componentDidMount() {
        // console.log(this.props, "heyyyyyyyy");
        
        this.props.fetchSongs();
    }

    render() {
        // debugger
        return (
            <div>
                <ul>
                    {this.props.songs.map((song,idx) => (<PlaylistSongsIndexItem 
                        key={song.id}
                        idx={idx}
                        song={song}
                        deletePlaylistSong={this.props.deletePlaylistSong}
                        playlist_songs={this.props.playlist_songs}
                        songClick={this.props.songClick}
                        playNow={this.props.playNow}
                        current_songs_list={this.props.songs}
                        nowPlayingQueue={this.props.nowPlayingQueue}
                        now_pl_green={this.props.now_pl_green}
                    />))}
                </ul>
                <Modal />
            </div>
        );
    }
}

export default PlaylistSongsIndex;