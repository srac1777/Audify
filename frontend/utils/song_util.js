export const fetchSongs = () => (
    $.ajax({
        method: 'GET',
        url: 'api/songs'
    })
);


export const fetchSong = id => (
    $.ajax({
        method: 'GET',
        url: `api/songs/${id}`
    })
);