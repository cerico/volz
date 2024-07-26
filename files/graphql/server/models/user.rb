class User < ApplicationRecord
  has_many :posts
  has_many :comments

  def full_address
    "#{number} #{street}, #{city} #{postcode}, #{country}"
  end
end
