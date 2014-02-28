class CreatePretenseVillageTalks < ActiveRecord::Migration
  def change
  	return
    ("01".."87").to_a.each do |vid|
      execute <<-SQL
        CREATE TABLE talk_pretense#{vid}s LIKE talks;
      SQL
    end
  end
end


