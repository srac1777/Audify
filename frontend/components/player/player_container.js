import { connect } from 'react-redux';
import Player from './player';


const mapStateToProps = state => {
    return {
        play_now_song: state.now_playing,
        now_playing_queue: Object.values(state.now_playing_queue)
    }
};

// const mapDispatchToProps = dispatch => ({
    
// });

export default connect(
    mapStateToProps,
    null
)(Player);