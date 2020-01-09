class Author < ActiveRecord::Base
    has_many :books

    def book_count
        self.books.count
    end
end