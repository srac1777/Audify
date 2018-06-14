import { RECEIVE_ALL_SONGS, RECEIVE_SONG } from "../actions/song_actions";
import merge from 'lodash/merge';

const songsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_SONGS:
            return merge({}, state, action.songs);
        case RECEIVE_SONG:
            return merge({}, state, [action.song.id]: action.song);
        // case LOGOUT_CURRENT_USER:
        //     return {};
        default:
            return state;
    }
};

export default songsReducer;