import { RECEIVE_ALL_PLAYLIST_FOLLOWERS, RECEIVE_PLAYLIST_FOLLOWER, REMOVE_PLAYLIST_FOLLOWER } from "../actions/playlist_follower_actions";
import merge from 'lodash/merge';
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const playlistsFollowersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_PLAYLIST_FOLLOWERS:
            return merge({}, state, action.playlist_followers);
        case RECEIVE_PLAYLIST_FOLLOWER:
            return merge({}, state, { [action.playlist_follower.id]: action.playlist_follower })
        case REMOVE_PLAYLIST_FOLLOWER:
            let newState = merge({}, state);
            delete newState[action.id];
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default playlistsFollowersReducer;