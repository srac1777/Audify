import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlist_actions';
import AddtoPlaylist from './add_to_playlist';

const mapStateToProps = state => {
    console.log(state);

    return {
        playlists: Object.values(state.entities.playlists)
    }
};

const mapDispatchToProps = dispatch => ({
    fetchPlaylists: () => dispatch(fetchPlaylists())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddtoPlaylist);