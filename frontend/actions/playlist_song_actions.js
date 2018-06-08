import * as PlaylistSongsUtil from '../utils/playlist_song_util';

export const RECEIVE_ALL_PLAYLIST_SONGS = 'RECEIVE_ALL_PLAYLIST_SONGS';
export const RECEIVE_PLAYLIST_SONG = 'RECEIVE_PLAYLIST_SONG';
export const REMOVE_PLAYLIST_SONG = 'REMOVE_PLAYLIST_SONG';

export const fetchPlaylistSongs = () => dispatch => (
    PlaylistSongsUtil.fetchPlaylistSongs().then(playlist_songs => dispatch({ type: RECEIVE_ALL_PLAYLIST_SONGS, playlist_songs }))
);


export const createPlaylistSong = playlist_song => dispatch => {
    return PlaylistSongsUtil.createPlaylistSong(playlist_song).then(playlist_song => dispatch({ type: RECEIVE_PLAYLIST_SONG, playlist_song }))
};

export const deletePlaylistSong = id => dispatch => (
    PlaylistSongsUtil.deletePlaylistSong(id).then(playlist_song => dispatch({ type: REMOVE_PLAYLIST_SONG, id: playlist_song.id }))
);


// export const fetchPlaylist = id => dispatch => (
//     PlaylistSongsUtil.fetchPlaylist(id).then(playlist => dispatch({ type: RECEIVE_PLAYLIST, playlist }))
// );