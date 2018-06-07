import { connect } from 'react-redux';
import { fetchPlaylists, createPlaylist } from '../../actions/playlist_actions';
import PlaylistForm from './playlist_form';

const mapStateToProps = state => ({
   playlist: {title: '', creator_id: `${state.session.currentUser.id}`}
});

const mapDispatchToProps = dispatch => ({
    createPlaylist: playlist => dispatch(createPlaylist(playlist))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistForm);