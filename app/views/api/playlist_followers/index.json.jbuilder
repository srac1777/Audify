@playlistfollowers.each do |playlistfollower|
  json.set! playlistfollower.id do
    json.extract! playlistfollower, :id, :playlist_id, :user_id
  end
end