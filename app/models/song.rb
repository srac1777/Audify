# == Schema Information
#
# Table name: songs
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  album_id   :integer          not null
#  song_url   :string           not null
#  duration   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord 
    validates_presence_of :title, :album_id, :song_url, :duration
    include PgSearch
        multisearchable :against => [:title], :using => [:tsearch, :trigram, :dmetaphone]

    belongs_to :album
    

    has_many :playlist_songs,
        foreign_key: :song_id,
        class_name: :PlaylistSong
    has_many :playlists, through: :playlist_songs
end
