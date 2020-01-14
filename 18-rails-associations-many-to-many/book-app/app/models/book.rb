class Book < ApplicationRecord
    has_many :authors_books
    has_many :authors, through: :authors_books
    validates :title, :snippet, presence: true
    validates :title, uniqueness: true
end