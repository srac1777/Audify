# == Schema Information
#
# Table name: artists
#
#  id      :bigint(8)        not null, primary key
#  name    :string           not null
#  img_url :string           not null
#  about   :text
#

class Artist < ApplicationRecord
    validates_presence_of :name, :img_url

    has_many :albums
end
