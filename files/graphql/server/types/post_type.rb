class Types::PostType < Types::BaseObject
  field :id, ID, null: false
  field :body, String, null: false
  field :user, Types::UserType, null: false
  field :comments, [Types::CommentType], null: false

  def user
    object.user
  end

  def comments
    object.comments
  end
end
