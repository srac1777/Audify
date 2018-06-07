# == Schema Information
#
# Table name: playlists
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  creator_id :integer          not null
#

class Playlist < ApplicationRecord
    validates_presence_of :title, :creator_id

    belongs_to :creator,
        class_name: :User,
        foreign_key: :creator_id
    
    has_many :playlist_songs,
        foreign_key: :playlist_id,
        class_name: :PlaylistSong
    has_many :songs, through: :playlist_songs

end
