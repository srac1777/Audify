import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import SongIndex from './songs_index';

const mapStateToProps = state => {
    return {
        songs: Object.values(state.entities.songs)
    }
};

const mapDispatchToProps = dispatch => ({
    fetchSongs: () => dispatch(fetchSongs())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SongIndex);