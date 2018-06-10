class AddImgUrlToPlaylists < ActiveRecord::Migration[5.1]
  def change
    add_column :playlists, :img_url, :string
  end
end
