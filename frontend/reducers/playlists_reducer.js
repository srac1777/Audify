import { RECEIVE_ALL_PLAYLISTS, REMOVE_PLAYLIST, RECEIVE_PLAYLIST } from "../actions/playlist_actions";
import merge from 'lodash/merge';

const playlistsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_PLAYLISTS:
            return merge({}, state, action.playlists);
        case RECEIVE_PLAYLIST:
            return merge({}, state, {[action.playlist.id]: action.playlist})
        case REMOVE_PLAYLIST:
            let newState = merge({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
};

export default playlistsReducer;