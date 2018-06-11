@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :id, :title, :creator_id, :img_url
    json.songs playlist.songs.each do |song|
      json.set! json.album_art song.album.img_url
    end
  end
end