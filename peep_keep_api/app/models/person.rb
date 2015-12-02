class Person < ActiveRecord::Base
  belongs_to :user

  # associations
  has_many :experiences
  
end
