import { connect } from 'react-redux';
import SRIndexItem from './sr_index_item';
import { fetchPlaylist } from '../../actions/playlist_actions';
import { fetchSong } from '../../actions/song_actions';

const mapStateToProps = (state, ownProps) => {
    // console.log(state.entities.clicked_song);
    // if (ownProps.result.searchable_type === 'Playlist') {
    //     // debugger
    //     fetchPlaylist(ownProps.result.searchable_id)
    // }
    return {
        result: ownProps.result,
        searchResults: Object.values(state.entities.search_results),
        songs: Object.values(state.entities.songs),
        playlists: Object.values(state.entities.playlists)
    }
};

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        fetchPlaylist: id => dispatch(fetchPlaylist(id)),
        fetchSong: (id) => dispatch(fetchSong(id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SRIndexItem);