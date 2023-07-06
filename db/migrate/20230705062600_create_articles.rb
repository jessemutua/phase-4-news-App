class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :description
      t.string :url
      t.string :image
      t.string :published
      t.integer :category_id
      t.integer :author_id

      t.timestamps
    end
  end
end
