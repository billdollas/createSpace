class Spaces < ActiveRecord::Migration[5.2]
  def change
    create_table :spaces do |t|
      t.string :category
      t.string :content
      t.integer :userid

      t.timestamps
    end
  end
end
