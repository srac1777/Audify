import merge from 'lodash/merge';
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { CLOSE_MODAL } from '../actions/modal_actions';
import { ADD_CLICKED_SONG } from '../actions/atp_song_click_action';

const songClickReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case ADD_CLICKED_SONG:
            return merge({}, state, action.song);
        case CLOSE_MODAL:
            return {};
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default songClickReducer;