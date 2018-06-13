import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { fetchPlaylist, deletePlaylist, fetchPlaylists } from '../../actions/playlist_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import { fetchSongs } from '../../actions/song_actions';
import { getFilteredPlaylistSongs } from '../../reducers/selectors';
import { deletePlaylistSong, fetchPlaylistSongs } from '../../actions/playlist_song_actions';
import merge from 'lodash/merge';
import { playNow } from '../../actions/play_now_action';
import { nowPlayingQueue } from '../../actions/now_playing_queue_action';




const msp = (state, ownProps) => {
    // let jj = getFilteredPlaylistSongs(state, ownProps.match.params.playlistId)
    // let newState = merge({},state);
    // let test = fetchSongs();
    // console.log(test);
    // debugger
    console.log(state,"lokolol");
    
    return {
    playlist: state.entities.playlists[ownProps.match.params.playlistId],
    // songs: Object.values(state.entities.songs)
    songs: getFilteredPlaylistSongs(state, ownProps.match.params.playlistId),
    playlist_songs: Object.values(state.entities.playlist_songs),
    ownProps: ownProps
}};

const mdp = dispatch => {
    // debugger
    return {
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    deletePlaylist: id => dispatch(deletePlaylist(id)),
    fetchSongs: () => dispatch(fetchSongs()),
    fetchPlaylistSongs: () => dispatch(fetchPlaylistSongs()),
    deletePlaylistSong: ps => dispatch(deletePlaylistSong(ps)),
    playNow: song => dispatch(playNow(song)),
    nowPlayingQueue: queue => dispatch(nowPlayingQueue(queue))
}};

export default connect(msp, mdp)(PlaylistShow);