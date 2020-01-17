class Author < ApplicationRecord
    has_many :authors_books
    has_many :books, through: :authors_books

    def book_count
        self.books.count
    end
    # has_many_and_belongs_to :authors_books
end
