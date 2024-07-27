class Types::UserType < Types::BaseObject
  field :id, ID, null: false
  field :email, String, null: false
  field :is_superadmin, Boolean, null: false
  field :first_name, String, null: false
  field :last_name, String, null: false
  field :number, String, null: false
  field :street, String, null: false
  field :postcode, String, null: false
  field :city, String, null: false
  field :country, String, null: false
  field :posts, [Types::PostType], null: false
  field :comments, [Types::CommentType], null: false
  field :address, String, null: false
  field :full_address, String, null: false
  field :errors, [Types::ErrorType], null: true

  def posts
    object.posts
  end

  def comments
    object.comments
  end

  def address
    "#{object.number} #{object.street}, #{object.postcode} #{object.city}, #{object.country}"
  end

  def errors
    object.errors.map { |e| { field_name: e.attribute, errors: object.errors[e.attribute] } }
  end

  # def self.visible?(context)
  #   context[:current_user] || context[:time].friday?
  # end
end

class Types::UserInputType < Types::BaseInputObject
  graphql_name "UserInputType"
  argument :first_name, String, required: true
  argument :last_name, String, required: true
  argument :number, String, required: true
  argument :street, String, required: true
  argument :postcode, String, required: true
  argument :city, String, required: true
  argument :country, String, required: true
  argument :email, String, required: true
  argument :password, String, required: true
end
