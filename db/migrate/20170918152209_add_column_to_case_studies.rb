class AddColumnToCaseStudies < ActiveRecord::Migration[5.0]
  def change
    add_column :case_studies, :priority, :integer
  end
end
