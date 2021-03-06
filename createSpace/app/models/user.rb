class User < ApplicationRecord

  has_many :spaces
  PASSWORD_LENGTH = (6..25)
  USERNAME_LENGTH = (5..15)
  EMAIL_LENGTH = (6..25)

  validates_presence_of :username
  validates :username, length: USERNAME_LENGTH, uniqueness: true

  validates :password, length: PASSWORD_LENGTH, allow_nil: true

  validates :email, length: EMAIL_LENGTH, uniqueness: true

  attr_reader :password

  def self.find_from_credentials(username, password)
    user = find_by(username: username)
    return nil unless user
    user if user.is_password?(password)
  end

  def is_password?(password_attempt)
    BCrypt::Password.new(password_digest).is_password?(password_attempt)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

end



# def raw_password=(pword)
#     @pword = pword
#     self.password = BCrypt::Password.create(pword)
#   end
