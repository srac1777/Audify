import { RECEIVE_ALL_SONGS } from "../actions/song_actions";
import merge from 'lodash/merge';

const songsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_SONGS:
            return merge({}, state, action.songs);
        default:
            return state;
    }
};

export default songsReducer;