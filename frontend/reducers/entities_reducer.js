import { combineReducers } from 'redux';
import playlistsReducer from './playlists_reducer';
import songsReducer from './songs_reducer';

export default combineReducers({
    playlists: playlistsReducer,
    songs: songsReducer
});