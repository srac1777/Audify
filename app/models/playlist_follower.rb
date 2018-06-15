# == Schema Information
#
# Table name: playlist_followers
#
#  id          :bigint(8)        not null, primary key
#  playlist_id :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistFollower < ApplicationRecord
    validates_presence_of :playlist_id, :user_id

    belongs_to :playlist,
        foreign_key: :playlist_id,
        class_name: :Playlist
    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end
