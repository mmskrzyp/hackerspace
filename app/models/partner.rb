class Partner < ActiveRecord::Base
  mount_uploader :avatar, AvatarUploader

  validates_presence_of :name, :url
end
