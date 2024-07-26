class Post < ApplicationRecord
  belongs_to :user
  has_many :comments

  validates :body, presence: true
  validates :user_id, presence: true
  validates :body, length: { minimum: 5, maximum: 1000 }
end
