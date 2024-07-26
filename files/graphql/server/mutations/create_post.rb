class Mutations::CreatePost < GraphQL::Schema::Mutation

  null allow_null: true

  description "create Post"
  argument :post, Types::PostInputType, required: true

  def resolve(post:)
    Post.create(post.to_h)
  end

end
