import { connect } from 'react-redux';
import BrowsePage from './browse';
import { fetchPlaylistFollowers } from '../../actions/playlist_follower_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';


const mapStateToProps = state => {
    return {
        all_playlists: Object.values(state.entities.playlists)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPlaylists: () => dispatch(fetchPlaylists())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BrowsePage);