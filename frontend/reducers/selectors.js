import { fetchSongs } from "../actions/song_actions";

export const getFilteredPlaylistSongs = (state, playlist_id) => {
    
    console.log(state,"state");
    let result = [];
    for(let id in state.entities.playlist_songs){
        // debugger
        // console.log(id);
        
        // console.log(state.entities.playlist_songs[id].id, parseInt(playlist_id), "hi");
        if (state.entities.playlist_songs[id].playlist_id === parseInt(playlist_id)){
            let iid = state.entities.playlist_songs[id].song_id
            // console.log(iid, "hihi");
            // console.log(state.entities.songs, "kiki");
            
            result.push(state.entities.songs[iid])
            } 
        }
        console.log(result);
        
    return result;
};