import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlist_actions';
import PlaylistIndex from './playlist_index';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    // console.log(state);
    
    return {
    playlists: Object.values(state.entities.playlists)
}};

const mapDispatchToProps = dispatch => ({
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistIndex);