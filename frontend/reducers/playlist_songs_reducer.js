import { RECEIVE_ALL_PLAYLIST_SONGS, REMOVE_PLAYLIST_SONG, RECEIVE_PLAYLIST_SONG } from "../actions/playlist_song_actions";
import merge from 'lodash/merge';
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const playlistsSongsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_PLAYLIST_SONGS:
            return merge({}, state, action.playlist_songs);
        case RECEIVE_PLAYLIST_SONG:
            return merge({}, state, { [action.playlist_song.id]: action.playlist_song })
        case REMOVE_PLAYLIST_SONG:
            let newState = merge({}, state);
            delete newState[action.id];
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default playlistsSongsReducer;