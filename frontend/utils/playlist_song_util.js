export const fetchPlaylistSongs = () => (
    $.ajax({
        method: 'GET',
        url: 'api/playlist_songs'
    })
);

export const createPlaylistSong = playlistsong => {
    return $.ajax({
        url: 'api/playlist_songs',
        method: 'POST',
        data: { playlistsong }
    });
};

export const deletePlaylistSong = id => {
    return $.ajax({
        url: `api/playlists_songs/${id}`,
        method: 'DELETE'
    });
};
                        


// export const fetchPlaylist = id => (
//     $.ajax({
//         method: 'GET',
//         url: `api/playlists/${id}`
//     })
// );