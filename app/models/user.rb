class User < ApplicationRecord
  has_many :grades
  has_many :skills, through: :grades

  # instance method
  def say_hi
      # self refers to the instance
     puts "Hello I am #{self.name}"
     puts password
  end

  # class method
  # self refers to the class
  def self.countYo
      # self refers to the class
      self.all.size
      # same thing
      # User.all.size
  end
  # methods below this only visible to class(ie the file)
  # and class inheriting from this class
  protected
  
  # methods below this only visible to class(ie the file)
  private


  # instance method
  def password
     if(true)
       return 'xxxxxxx'
     end
    return '123456'
  end

end