class CreatePlaylists < ActiveRecord::Migration[5.1]
  def change
    create_table :playlists do |t|
      t.string :title, null: false
      t.integer :creator_id, null: false
    end
    add_index :playlists, :title
    add_index :playlists, :creator_id
  end
end
