import * as SongUtil from '../utils/song_util';

export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';

export const fetchSongs = () => dispatch => (
    SongUtil.fetchSongs().then(songs => dispatch({ type: RECEIVE_ALL_SONGS, songs }))
);