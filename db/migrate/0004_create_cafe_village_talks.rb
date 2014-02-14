class CreateCafeVillageTalks < ActiveRecord::Migration
  def change
    ("001".."238").to_a.each do |vid|
      execute <<-SQL
        CREATE TABLE talk_cabala#{vid}s LIKE talks;
      SQL
    end

    ("01".."87").to_a.each do |vid|
      execute <<-SQL
        RENAME TABLE talk_pretense#{vid}s to talk_pretense0#{vid}s;
      SQL
    end
  end
end


