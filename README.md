# Welcome to the Audify Repo
Visit: [Audify](https://audify-premium.herokuapp.com)

## Intro
[Audify](https://audify-premium.herokuapp.com) was my attempt at cloning the Spotify Web Player. Spotify, as most of us know, is a music streaming service that has over 140 Million users worldwide with a library of 40+ Million songs. While Audify may not be of said popularity, I put forth the best of my efforts in creating its clone with a staggering 40+ ~~Million~~ songs in its library.

![alt text](https://github.com/srac1777/Audify/blob/master/wiki/readme-screengrabs/Screen%20Shot%202018-06-15%20at%203.31.45%20PM.png "Splash Screen")

## Technologies

I built Audify using React-Redux for frontend interaction and Rails as the backend framework while using PostgreSQL as the database for development and production which proved to be helpful (oweing to it's pg_search). Owing to Spotify's modern design language, I had the opportunity to work extensively with CSS. I also used AWS S3 to store the songs and other assets.


## Functionality

Audify allows its users to create playlists, add songs to playlists, search, and follow playlists.
I modelled the UX closely after the real app while adding a little more of my taste for drop shadows. 

![no gif](https://github.com/srac1777/Audify/blob/master/wiki/readme-screengrabs/home.gif "User Interaction")

## Significant Code

I had to create custom API endpoints to remove songs from playlists because I had access to both song_id and playlist_id but I did not have access to the playlist_song_id in the joins table. So I sent both the song id and playlist id to the backend by creating a custom route that stores the information in its route params.

```javascript
     delete '/playlist_songs/:playlist_id/:song_id', to: 'playlist_songs#destroy'
```

In the frontend I needed to pass both the playlist_id and song_id so I made a function that passes in both:

```javascript
handleDelete() {
        this.props.deletePlaylistSong({
            playlist_id: this.props.playlist.id,
            song_id: this.props.song.id
            })
    }
```
The deletePlaylistSong was a an action that issued an ajax request with both song and playlist information:
```javascript
export const deletePlaylistSong = ps => {
    return $.ajax({
        url: `api/playlist_songs/${ps.playlist_id}/${ps.song_id}`,
        method: 'DELETE',
        data: { ps }
    });
};
```

## Other Visuals
### Playlists

![no gif](https://github.com/srac1777/Audify/blob/master/wiki/readme-screengrabs/playlist.gif "Playlists")

### Browse

![no gif](https://github.com/srac1777/Audify/blob/master/wiki/readme-screengrabs/browse.gif "Playlists")






