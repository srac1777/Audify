import * as PlaylistUtil from '../utils/playlist_util';

export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';

export const fetchPlaylists = () => dispatch => (
    PlaylistUtil.fetchPlaylists().then(playlists => dispatch({ type: RECEIVE_ALL_PLAYLISTS, playlists }))
);

export const fetchPlaylist = id => dispatch => (
    PlaylistUtil.fetchPlaylist(id).then(playlist => dispatch({ type: RECEIVE_PLAYLIST, playlist }))
);

export const createPlaylist = playlist => dispatch => {
   return PlaylistUtil.createPlaylist(playlist).then(playlist => dispatch({ type: RECEIVE_PLAYLIST, playlist }))
};

export const updatePlaylist = playlist => dispatch => {
    return PlaylistUtil.updatePlaylist(playlist).then(playlist => dispatch({ type: RECEIVE_PLAYLIST, playlist }))
};

export const deletePlaylist = id => dispatch => (
    PlaylistUtil.deletePlaylist(id).then(playlist => dispatch({ type: REMOVE_PLAYLIST, id: playlist.id }))
);