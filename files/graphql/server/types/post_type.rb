class Types::PostType < Types::BaseObject
  field :id, ID, null: false
  field :body, String, null: false
  field :user, Types::UserType, null: false
  field :comments, [Types::CommentType], null: false
  field :errors, [Types::ErrorType], null: true

  def user
    object.user
  end

  def comments
    object.comments
  end

  def errors
    object.errors.map { |e| { field_name: e.attribute, errors: object.errors[e.attribute] } }
  end
end

class Types::PostInputType < Types::BaseInputObject
  description "Attributes for creating or updating an Post"
  graphql_name "PostInputType"
  argument :id, ID, required: false
  argument :body, String, required: true
  argument :user_id, ID, required: true
end
