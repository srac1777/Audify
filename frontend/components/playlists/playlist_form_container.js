import { connect } from 'react-redux';
import { fetchPlaylists, createPlaylist } from '../../actions/playlist_actions';
import PlaylistForm from './playlist_form';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
   playlist: {title: '', creator_id: `${state.session.currentUser.id}`}
});

const mapDispatchToProps = dispatch => ({
    createPlaylist: playlist => dispatch(createPlaylist(playlist)),
    closeModal: () => dispatch(closeModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistForm);