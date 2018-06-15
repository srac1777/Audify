import { connect } from 'react-redux';
import BrowsePage from './browse';
import { fetchPlaylistFollowers } from '../../actions/playlist_follower_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { getFilteredOtherPlaylists } from '../../reducers/selectors';


const mapStateToProps = state => {
    return {
        all_playlists: getFilteredOtherPlaylists(state)
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