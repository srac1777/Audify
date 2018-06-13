import { connect } from 'react-redux';
import Player from './player';
import { updateNwpl } from '../../actions/update_nwpl_action';


const mapStateToProps = state => {
    return {
        now_playing_song: state.now_playing_queue[state.now_playing],
        now_playing_index: state.now_playing,
        now_playing_queue: Object.values(state.now_playing_queue)
    }
};

const mapDispatchToProps = dispatch => ({
    updateNwpl: song => dispatch(updateNwpl(song))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);