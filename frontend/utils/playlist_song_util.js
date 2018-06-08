export const fetchPlaylistSongs = () => (
    $.ajax({
        method: 'GET',
        url: 'api/playlist_songs'
    })
);

export const createPlaylistSong = playlist_song => {
    return $.ajax({
        url: 'api/playlist_songs',
        method: 'POST',
        data: { playlist_song }
    });
};

export const deletePlaylistSong = ps => {
    return $.ajax({
        url: `api/playlist_songs/${ps.playlist_id}/${ps.song_id}`,
        method: 'DELETE',
        data: { ps }
    });
};
                        


// export const fetchPlaylist = id => (
//     $.ajax({
//         method: 'GET',
//         url: `api/playlists/${id}`
//     })
// );