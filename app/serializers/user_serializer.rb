class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :full_name, :author
  has_many :books
  has_many :reviews
  has_many :reviewed_books
end
