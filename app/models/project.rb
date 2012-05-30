class Project < ActiveRecord::Base
  validates :content, :length => { :maximum => 500 }
  belongs_to :hacker
end
