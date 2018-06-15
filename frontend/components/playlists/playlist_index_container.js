import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlist_actions';
import PlaylistIndex from './playlist_index';
import { openModal, closeModal } from '../../actions/modal_actions';
import { getFilteredPlaylists } from '../../reducers/selectors';

const mapStateToProps = state => {
    // console.log(state);
    
    return {
        playlists: getFilteredPlaylists(state)
}};

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchPlaylists: () => dispatch(fetchPlaylists())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistIndex);