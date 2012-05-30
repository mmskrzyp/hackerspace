class Hacker < ActiveRecord::Base
  mount_uploader :avatar, AvatarUploader
  has_many :projects
end
