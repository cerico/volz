# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World"
    end

    field :create_post, Types::PostType, mutation: Mutations::CreatePost

    field :update_post, Boolean do
      argument :post, Types::PostInputType, required: true
    end

    def update_post(post:)
      found_post = Post.find(post[:id])
      found_post.update(author.to_h)
    end

    field :delete_post, Boolean do
      argument :id, ID, required: true
    end

    def delete_post(id:)
      Post.find(id).destroy
    end

    field :create_comment, Types::CommentType, mutation: Mutations::CreateComment

    field :update_comment, Boolean do
      argument :comment, Types::CommentInputType, required: true
    end

    def update_comment(comment:)
      found_comment = Comment.find(comment[:id])
      found_comment.update(author.to_h)
    end

    field :delete_comment, Boolean do
      argument :id, ID, required: true
    end

    def delete_comment(id:)
      Comment.find(id).destroy
    end

    field :create_user, Types::UserType, mutation: Mutations::CreateUser

    field :update_user, Boolean do
      argument :user, Types::UserInputType, required: true
    end

    def update_user(user:)
      found_user = User.find(user[:id])
      found_user.update(author.to_h)
    end

    field :delete_user, Boolean do
      argument :id, ID, required: true
    end

    def delete_user(id:)
      User.find(id).destroy
    end
  end
end
