import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { NOW_PLAYING_QUEUE } from "../actions/now_playing_queue_action";

const nowPlayingQueueReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case NOW_PLAYING_QUEUE:
            return action.queue;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default nowPlayingQueueReducer;