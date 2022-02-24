class User < ApplicationRecord
  has_secure_password
  has_many :posts
  has_many :facilities, through: :posts

  # PASSWORD_REQUIREMENTS = /\A(?=.*\d)(?=.*([a-z]|[A-Z]))([\x20-\x7E]){8,40}\z/
    # Password should contain at least one integer, at least one alphabet (either in downcase or upcase), can have special characters from 20 to 7E ascii values, should be minimum of 8 and maximum of 40 characters long.

  validates :username, presence: :true
  validates :email,presence: true, uniqueness: true
  # format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, 
  # validates :password, presence: true, format: PASSWORD_REQUIREMENTS


end
