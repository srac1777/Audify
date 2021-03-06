import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import SongIndex from './songs_index';
import { openModal, closeModal } from '../../actions/modal_actions';
import { songClick } from '../../actions/atp_song_click_action';
import { playNow } from '../../actions/play_now_action';
import { nowPlayingQueue } from '../../actions/now_playing_queue_action';

const mapStateToProps = state => {
    return {
        songs: Object.values(state.entities.songs),
        now_pl_green: state.now_playing_queue[state.now_playing] || ''
    }
};

const mapDispatchToProps = dispatch => ({
    fetchSongs: () => dispatch(fetchSongs()),
    openModal: modal => dispatch(openModal(modal)),
    songClick: song => dispatch(songClick(song)),
    closeModal: () => dispatch(closeModal()),
    playNow: song => dispatch(playNow(song)),
    nowPlayingQueue: queue => dispatch(nowPlayingQueue(queue))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SongIndex);