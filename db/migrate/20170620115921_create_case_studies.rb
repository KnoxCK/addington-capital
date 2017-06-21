class CreateCaseStudies < ActiveRecord::Migration[5.0]
  def change
    create_table :case_studies do |t|
      t.string :title
      t.text :summary
      t.text :description
      t.string :thumbnail
      t.string :photo
      t.references :category, index: true, foreign_key: true
      t.timestamps
    end
  end
end
