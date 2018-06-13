import { connect } from 'react-redux';
// import { fetchPlaylists, createPlaylist } from '../../actions/playlist_actions';
// import PlaylistForm from './playlist_form';
import { closeModal } from '../../actions/modal_actions';
import { deletePlaylist } from '../../actions/playlist_actions';
import DeletePlaylist from './delete_playlist_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state,ownProps) => {
    // debugger
    return {
    playlist: ownProps.playlist,
    // ownProps
}};

const mapDispatchToProps = dispatch => ({
    deletePlaylist: id => dispatch(deletePlaylist(id)),
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(DeletePlaylist));