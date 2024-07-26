class Types::CommentType < Types::BaseObject
  field :id, ID, null: false
  field :body, String, null: false
  field :post, Types::PostType, null: false

  def post
    object.post
  end
end
