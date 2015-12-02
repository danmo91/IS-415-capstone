class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :fname
      t.string :lname
      t.string :background
      t.belongs_to :user, index: true
      t.timestamps null: false
    end
  end
end
