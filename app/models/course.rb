class Course < ActiveRecord::Base
  VALID_NAME_REGEX = /[a-z]/i
  validates :name, :presence => true, :length => {:in => 3..45}, format: { with: VALID_NAME_REGEX }

  VALID_DESCRIPTION_REGEX = /\w/i
  validates :description, :presence => true, :length => {:in => 3..45}, format: { with: VALID_DESCRIPTION_REGEX }

  VALID_STATUS_REGEX = /\d/i
  validates :status, :presence => true, format: { with: VALID_STATUS_REGEX }
end
