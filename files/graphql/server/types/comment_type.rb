class Types::CommentType < Types::BaseObject
  field :id, ID, null: false
  field :body, String, null: false
  field :post, Types::PostType, null: false
  field :user, Types::UserType, null: false
  field :errors, [Types::ErrorType], null: true

  def post
    object.post
  end

  def user
    object.user
  end

  def errors
    object.errors.map { |e| { field_name: e.attribute, errors: object.errors[e.attribute] } }
  end

  def self.authorized?(object, context)
    true
    # object.user == context[:current_user]
  end
end

class Types::CommentInputType < Types::BaseInputObject
  graphql_name "CommentInputType"
  argument :body, String, required: true
  argument :post_id, ID, required: true
  argument :user_id, ID, required: true
end
