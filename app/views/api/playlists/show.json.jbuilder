json.extract! @playlist, :id, :title, :creator_id, :img_url

@playlist.songs.each do |song|
      json.set! json.album_art song.album.img_url
end