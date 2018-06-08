import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import SongIndex from './songs_index';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
        songs: Object.values(state.entities.songs)
    }
};

const mapDispatchToProps = dispatch => ({
    fetchSongs: () => dispatch(fetchSongs()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SongIndex);