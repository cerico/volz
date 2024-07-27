class User < ApplicationRecord

  has_secure_password

  has_many :sessions, dependent: :destroy
  has_many :posts
  has_many :comments

  def full_address
    "#{number} #{street}, #{city} #{postcode}, #{country}"
  end
end
