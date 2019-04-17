class Review < ApplicationRecord
    belongs_to :user
    belongs_to :book
  
    validates :stars, presence: true
    validates :comments, presence: true
    validates :book_id, presence: true

    def add_at
        created_at.strftime("%b %e, %Y")
    end
end
