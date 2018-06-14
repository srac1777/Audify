json.extract! @song, :id, :title, :album_id, :song_url, :duration
json.album_title @song.album.title
json.artist_name @song.album.artist.name
json.album_art @song.album.img_url