class Student < ActiveRecord::Base
  VALID_NAME_REGEX = /[a-z]/i
  validates :name, :presence => true, :length => {:in => 3..45}, format: { with: VALID_NAME_REGEX }

  VALID_REGISTER_NUMBER_REGEX = /\w/i
  validates :register_number, :presence => true, :length => {:in => 3..45}, format: { with: VALID_REGISTER_NUMBER_REGEX }

  VALID_STATUS_REGEX = /\d/i
  validates :status, :presence => true, format: { with: VALID_STATUS_REGEX }
end
