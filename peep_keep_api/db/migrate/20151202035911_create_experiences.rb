class CreateExperiences < ActiveRecord::Migration
  def change
    create_table :experiences do |t|
      t.string :title
      t.string :description
      t.date :date
      t.belongs_to :person, index: true
      t.timestamps null: false
    end
  end
end
