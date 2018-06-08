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