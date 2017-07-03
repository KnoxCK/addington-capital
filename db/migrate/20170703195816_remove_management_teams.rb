class RemoveManagementTeams < ActiveRecord::Migration[5.0]
  def change
    drop_table :management_teams
  end
end
