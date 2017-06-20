class CreatePressReleases < ActiveRecord::Migration[5.0]
  def change
    create_table :press_releases do |t|
      t.string :title
      t.text :body
      t.string :photo
      t.text :first_paragraph
      t.date :date
      t.timestamps
    end
  end
end
