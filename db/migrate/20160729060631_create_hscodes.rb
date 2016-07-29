class CreateHscodes < ActiveRecord::Migration[5.0]
  def change
    create_table :hscodes do |t|

      t.timestamps
    end
  end
end
