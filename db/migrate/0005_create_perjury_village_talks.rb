
class CreatePerjuryVillageTalks < ActiveRecord::Migration
  def change
    ("001".."217").to_a.each do |vid|
      execute <<-SQL
        CREATE TABLE talk_perjury#{vid}s LIKE talks;
      SQL
    end
  end
end


