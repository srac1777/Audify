import * as PlaylistSongsUtil from '../utils/playlist_util';

export const RECEIVE_ALL_PLAYLIST_SONGS = 'RECEIVE_ALL_PLAYLIST_SONGS';
export const RECEIVE_PLAYLIST_SONG = 'RECEIVE_PLAYLIST_SONG';
export const REMOVE_PLAYLIST_SONG = 'REMOVE_PLAYLIST_SONG';

export const fetchPlaylists = () => dispatch => (
    PlaylistSongsUtil.fetchPlaylistSongs().then(playlists => dispatch({ type: RECEIVE_ALL_PLAYLISTS, playlists }))
);


export const createPlaylistSong = playlist => dispatch => {
    return PlaylistSongsUtil.createPlaylist(playlist).then(playlist => dispatch({ type: RECEIVE_PLAYLIST, playlist }))
};

export const deletePlaylistSong = id => dispatch => (
    PlaylistSongsUtil.deletePlaylist(id).then(playlist => dispatch({ type: REMOVE_PLAYLIST, id: playlist.id }))
);


// export const fetchPlaylist = id => dispatch => (
//     PlaylistSongsUtil.fetchPlaylist(id).then(playlist => dispatch({ type: RECEIVE_PLAYLIST, playlist }))
// );