class Mutations::CreateComment < GraphQL::Schema::Mutation

  null allow_null: true

  description "create Comment"
  argument :comment, Types::CommentInputType, required: true

  def resolve(comment:)
    Comment.create(comment.to_h)
  end

end
