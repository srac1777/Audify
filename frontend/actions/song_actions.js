import * as SongUtil from '../utils/song_util';

export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';

export const fetchSongs = () => dispatch => (
    SongUtil.fetchSongs().then(songs => dispatch({ type: RECEIVE_ALL_SONGS, songs }))
);

export const fetchSong = (id) => dispatch => (
    SongUtil.fetchSong(id).then(song => dispatch({ type: RECEIVE_SONG, song }))
);