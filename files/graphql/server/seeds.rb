# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

User.create!(
  first_name: 'Kerry',
  last_name: 'Barnes',
  number: '56',
  street: 'Wolverton Road',
  postcode: 'ol14 5gh',
  city: 'Todmorden',
  country: 'UK'
)

Post.create!(
  body: 'The name Todmorden is first attested in 1246, in the form Totmardene;[5] other pre-modern spellings include Tottemerden, Totmereden and Totmerden.[6] This is thought to originate in Old English as a personal name, Totta, combined with the Old English words mǣre ("border, boundary") and denu ("valley"). Thus the name once meant "Totta"s border-valley".[5][6] The valley in question is thought to have been the one running north-west from the town,[6] and the border the one between Lancashire and Yorkshire.[5]

  Although fanciful and historically implausible, alternative etymologies circulate, such as the speculation that the name derives from two words for death: German Tod and French mort,[7] or that the name meant "marshy den of the fox", supposedly from tod, a word of uncertain origin meaning "fox" first attested around 1200,[8] moor (which in Old English meant "marsh"), and den (also attested in Old English to mean an animal"s lair).[citation needed]

 "Tod" is an informal name for Todmorden, often used in everyday conversation.[9][10] ',
  user_id: User.first.id
)

Post.create!(
  body: 'Don\'t call it a comeback',
  user_id: User.first.id
)

Comment.create!(
  body: 'Nice post!',
  user_id: User.first.id,
  post_id: Post.first.id
)

Comment.create!(
  body: 'Nice post ii!',
  user_id: User.first.id,
  post_id: Post.first.id
)

Comment.create!(
  body: 'It kind of is a comeback tho',
  user_id: User.first.id,
  post_id: Post.last.id
)

Comment.create!(
  body: 'it feels like a comeback to me in all honesty',
  user_id: User.first.id,
  post_id: Post.last.id
)
