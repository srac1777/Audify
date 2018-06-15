class CreatePlaylistFollowers < ActiveRecord::Migration[5.1]
  def change
    create_table :playlist_followers do |t|
      t.integer :playlist_id, null: false
      t.integer :user_id, null: false 
      t.timestamps
    end
    add_index :playlist_followers, [:playlist_id, :user_id]
    add_index :playlist_followers, :playlist_id
    add_index :playlist_followers, :user_id
  end
end
