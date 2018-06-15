import * as PlaylistFollowersUtil from '../utils/playlist_follower_util';

export const RECEIVE_ALL_PLAYLIST_FOLLOWERS = 'RECEIVE_ALL_PLAYLIST_FOLLOWERS';
export const RECEIVE_PLAYLIST_FOLLOWER = 'RECEIVE_PLAYLIST_FOLLOWER';
export const REMOVE_PLAYLIST_FOLLOWER = 'REMOVE_PLAYLIST_FOLLOWER';

export const fetchPlaylistFollowers = () => dispatch => (
    PlaylistFollowersUtil.fetchPlaylistFollowers().then(playlist_followers => dispatch({ type: RECEIVE_ALL_PLAYLIST_FOLLOWERS, playlist_followers }))
);


export const createPlaylistFollower = playlist_follower => dispatch => {
    return PlaylistFollowersUtil.createPlaylistFollower(playlist_follower).then(playlist_follower => dispatch({ type: RECEIVE_PLAYLIST_FOLLOWER, playlist_follower }))
};

export const deletePlaylistFollower = pf => dispatch => (
    PlaylistFollowersUtil.deletePlaylistFollower(pf).then(playlist_follower => dispatch({ type: REMOVE_PLAYLIST_FOLLOWER, id: playlist_follower.id }))
);