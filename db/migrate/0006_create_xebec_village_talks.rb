
class CreateXebecVillageTalks < ActiveRecord::Migration
  def change
  	return
    ("001".."162").to_a.each do |vid|
      execute <<-SQL
        CREATE TABLE talk_xebec#{vid}s LIKE talks;
      SQL
    end
  end
end


