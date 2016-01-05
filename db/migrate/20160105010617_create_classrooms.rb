class CreateClassrooms < ActiveRecord::Migration
  def change
    create_table :classrooms do |t|
      t.has_many :student, index: true
      t.has_many :course, index: true
      t.datetime :entry_at

      t.timestamps
    end
  end
end
