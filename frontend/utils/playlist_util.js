export const fetchPlaylists = () => (
    $.ajax({
        method: 'GET',
        url: 'api/playlists'
    })
);

export const fetchPlaylist = id => (
    $.ajax({
        method: 'GET',
        url: `api/playlists/${id}`
    })
);

export const createPlaylist = playlist => {
    return $.ajax({
        url: 'api/playlists',
        method: 'POST',
        data: { playlist }
    });
};

export const updatePlaylist = playlist => {
    return $.ajax({
        url: `api/playlists/${playlist.id}`,
        method: 'PATCH',
        data: { playlist }
    });
};

export const deletePlaylist = id => {
    return $.ajax({
        url: `api/playlists/${id}`,
        method: 'DELETE'
    });
};