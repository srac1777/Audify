import merge from 'lodash/merge';
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { PLAY_NOW } from '../actions/play_now_action';

const playNowReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case PLAY_NOW:
            return action.song;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default playNowReducer;