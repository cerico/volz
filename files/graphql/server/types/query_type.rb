# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :node, Types::NodeType, null: true, description: "Fetches an object given its ID." do
      argument :id, ID, required: true, description: "ID of the object."
    end

    def node(id:)
      context.schema.object_from_id(id, context)
    end

    field :nodes, [Types::NodeType, null: true], null: true, description: "Fetches a list of objects given a list of IDs." do
      argument :ids, [ID], required: true, description: "IDs of the objects."
    end

    def nodes(ids:)
      ids.map { |id| context.schema.object_from_id(id, context) }
    end

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end

    field :user, Types::UserType, null: true do
      description "Find an user by ID"
      argument :id, ID, required: true
    end

    def user(id:)
      User.find(id)
    end

    field :post, Types::PostType, null: true do
      description "Find an post by ID"
      argument :id, ID, required: true
    end

    def post(id:)
      Post.find(id)
    end

    field :comment, Types::CommentType, null: true do
      description "Find an comment by ID"
      argument :id, ID, required: true
    end

    def comment(id:)
      Comment.find(id)
    end

    field :login, String, null: true do
      description "Login a user"
      argument :email, String, required: true
      argument :password, String, required: true
    end

    def login(email:, password:)
      user = User.find_by(email: email)
      return unless user
      user.authenticate(password)

      user.sessions.create.token
    end

    field :logout, Boolean, null: true do
      description "Logout a user"
    end

    def logout()
      session = Session.find_by(token: context[:session_id])
      return unless session

      session.destroy_all
      true
    end
  end
end
