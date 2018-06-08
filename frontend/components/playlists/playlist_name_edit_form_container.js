import { connect } from 'react-redux';
import { createPlaylist, updatePlaylist } from '../../actions/playlist_actions';
import PlaylistNameEditForm from './playlist_name_edit_form';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    // console.log(state.playlists);
    
    return {
        playlist: state.entities.playlists[ownProps.match.params.playlistId]
    }
};

const mapDispatchToProps = dispatch => ({
    updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistNameEditForm));