import { combineReducers } from 'redux';
import playlistsReducer from './playlists_reducer';
import songsReducer from './songs_reducer';
import playlistsSongsReducer from './playlist_songs_reducer';
import songClickReducer from './song_click_reducer';
import searchResultsReducer from './search_reducer';
import playlistsFollowersReducer from './playlist_followers_reducer';

export default combineReducers({
    playlists: playlistsReducer,
    songs: songsReducer,
    playlist_songs: playlistsSongsReducer,
    playlist_followers: playlistsFollowersReducer,
    clicked_song: songClickReducer,
    search_results: searchResultsReducer
});