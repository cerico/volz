class Types::UserType < Types::BaseObject
  field :id, ID, null: false
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

  def posts
    object.posts
  end

  def comments
    object.comments
  end

  def address
    "#{object.number} #{object.street}, #{object.postcode} #{object.city}, #{object.country}"
  end
end
