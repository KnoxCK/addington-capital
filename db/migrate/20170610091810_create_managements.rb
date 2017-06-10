class CreateManagements < ActiveRecord::Migration[5.0]
  def change
    create_table :managements do |t|
      t.string :name
      t.string :position
      t.text :description
      t.string :vcard
      t.string :twitter_url
      t.string :linkedin_url
      t.string :facebook_url

      t.timestamps
    end
  end
end
