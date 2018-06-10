json.extract! song, :id, :title, :album_id, :song_url, :duration
json.album_title song.album.title
json.artist_name song.album.artist.name