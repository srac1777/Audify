import { RECEIVE_ALL_PLAYLISTS, REMOVE_PLAYLIST, RECEIVE_PLAYLIST } from "../actions/playlist_actions";
import merge from 'lodash/merge';
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const playlistsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_PLAYLISTS:
            // debugger
            return merge({}, state, action.playlists);
        case RECEIVE_PLAYLIST:
            return merge({}, state, {[action.playlist.id]: action.playlist})
        case REMOVE_PLAYLIST:
            let newState = merge({}, state);
            delete newState[action.id];
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default playlistsReducer;