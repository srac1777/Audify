export const fetchPlaylistFollowers = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/playlist_followers'
    })
};

export const createPlaylistFollower = playlist_follower => {
    return $.ajax({
        url: 'api/playlist_followers',
        method: 'POST',
        data: { playlist_follower: {playlist_id: parseInt(playlist_follower)} }
    });
};

export const deletePlaylistFollower = pf => {
    return $.ajax({
        url: `api/playlist_followers/${pf.playlist_id}/${pf.user_id}`,
        method: 'DELETE',
        data: { pf }
    });
};