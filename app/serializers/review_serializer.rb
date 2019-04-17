class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :stars, :comments, :book, :user, :add_at

  belongs_to :user
  belongs_to :book
end
