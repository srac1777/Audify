@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :id, :title, :creator_id, :img_url
    json.creator_name playlist.creator.username

  end
end
