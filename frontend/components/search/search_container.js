import { connect } from 'react-redux';
import Search from './search';
import { fetchSearchResults } from '../../actions/search_action';
import { fetchPlaylist } from '../../actions/playlist_actions';
import { fetchSongs } from '../../actions/song_actions';

const mapStateToProps = state => {
    // console.log(state.entities.clicked_song);
    return {
        searchResults: Object.values(state.entities.search_results),
        songs: Object.values(state.entities.songs),
        playlists: state.entities.playlists 
    }
};

const mapDispatchToProps = dispatch => {
    // debugger
   return {
   fetchSearchResults: query => dispatch(fetchSearchResults(query)),
   fetchPlaylist: id => dispatch(fetchPlaylist(id)),
   fetchSongs: () => dispatch(fetchSongs())
}};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);