@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :id, :title, :creator_id
  end
end