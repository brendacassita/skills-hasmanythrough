class Grade < ApplicationRecord
  belongs_to :user
  belongs_to :skill


  def self.all_and_then_some
    grades = self.all
    # BAD TO DO THIS... WORKS FOR NOW, REALLY SLOW IF BIG DATA
    return grades.map do |grade|
      {id: grade.id, score: grade.score, user:grade.user, skill:grade.skill}
      # be carfull using pry in loops, it will keep calling it
      # binding.pry
    end
  end
end