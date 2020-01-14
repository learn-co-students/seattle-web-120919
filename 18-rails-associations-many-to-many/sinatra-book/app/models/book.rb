class Book < ActiveRecord::Base
    validates :title, presence: true
    has_many :authors_books
    has_many :authors, through: :authors_books
end