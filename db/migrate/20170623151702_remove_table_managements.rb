class RemoveTableManagements < ActiveRecord::Migration[5.0]
  def change
    drop_table :managements
    remove_column :case_studies, :thumbnail
  end
end
