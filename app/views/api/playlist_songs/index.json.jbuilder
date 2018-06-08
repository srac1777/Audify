@playlistsongs.each do |playlistsong|
  json.set! playlistsong.id do
    json.extract! playlistsong, :id, :playlist_id, :song_id
  end
end