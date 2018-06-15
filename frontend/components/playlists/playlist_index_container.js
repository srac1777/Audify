import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlist_actions';
import PlaylistIndex from './playlist_index';
import { openModal, closeModal } from '../../actions/modal_actions';
import { getFilteredPlaylists, getFilteredFollowedPlaylists } from '../../reducers/selectors';
import { fetchPlaylistFollowers } from '../../actions/playlist_follower_actions';

const mapStateToProps = state => {
    // console.log(state);
    
    return {
        playlists: getFilteredPlaylists(state),
        followed_playlists: getFilteredFollowedPlaylists(state)
}};

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchPlaylistFollowers: () => dispatch(fetchPlaylistFollowers())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistIndex);