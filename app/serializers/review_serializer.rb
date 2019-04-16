class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :book_id, :stars, :comments, :created_at, :updated_at

  belongs_to :user
  belongs_to :book
end
