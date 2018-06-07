import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { fetchPlaylist } from '../../actions/playlist_actions';


const msp = (state, ownProps) => ({
    playlist: state.entities.playlists[ownProps.match.params.playlistId]
});

const mdp = dispatch => ({
    fetchPlaylist: id => dispatch(fetchPlaylist(id))
})

export default connect(msp, mdp)(PlaylistShow);