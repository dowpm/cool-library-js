class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :isbn, :nbr_page, :summary, :publication_year, :user_id, :created_at, :updated_at
  belongs_to :author#, serializer: BookUserSerializer
  has_many :reviews
  has_many :reviewers
end
