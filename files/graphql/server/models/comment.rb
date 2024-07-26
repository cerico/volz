class Comment < ApplicationRecord
  belongs_to :post
  belongs_to :user

  validates :body, presence: true
  validates :user_id, presence: true
  validates :post_id, presence: true
  validates :body, length: { minimum: 5, maximum: 1000 }
end
