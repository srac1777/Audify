import { connect } from 'react-redux';
import { fetchPlaylists, updatePlaylist } from '../../actions/playlist_actions';
import AddtoPlaylist from './atp';
import { createPlaylistSong } from '../../actions/playlist_song_actions'
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    // console.log(state.entities.clicked_song);

    return {
        playlists: Object.values(state.entities.playlists),
        clickedSong: state.entities.clicked_song
    }
};

const mapDispatchToProps = dispatch => ({
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    createPlaylistSong: playlist_song => dispatch(createPlaylistSong(playlist_song)),
    closeModal: () => dispatch(closeModal()),
    updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddtoPlaylist);