import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import PlaylistSongsIndex from './pl_songs_index';
import { openModal, closeModal } from '../../actions/modal_actions';
import { songClick } from '../../actions/atp_song_click_action';
import { deletePlaylistSong } from '../../actions/playlist_song_actions';


const mapStateToProps = state => {
    return {
        songs: Object.values(state.entities.songs),
        playlist_songs: Object.values(state.entities.playlist_songs)
    }
};

const mapDispatchToProps = dispatch => ({
    fetchSongs: () => dispatch(fetchSongs()),
    openModal: modal => dispatch(openModal(modal)),
    songClick: song => dispatch(songClick(song)),
    deletePlaylistSong: id => dispatch(deletePlaylistSong(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistSongsIndex);