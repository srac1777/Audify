json.extract! @playlistfollower, :id, :playlist_id, :user_id

json.creator_name @playlistfollower.user.username
json.playlist_obj @playlistfollower.playlist