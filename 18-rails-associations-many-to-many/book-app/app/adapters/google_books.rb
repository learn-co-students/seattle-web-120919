module Adapter
  class GoogleBooks
    BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='

    attr_reader :author

    def initialize(author)
      @author = Author.find_or_create_by(name: author)
    end

    def fetch_books
      books = JSON.parse(RestClient.get(author_url))
      books['items'].each do |item|
        # binding.pry
        book = ::Book.new
        # book.author = author
        book.authors << Author.all.sample
        book.authors << Author.all.sample
        book.title = item['volumeInfo']['title']
        book.snippet = item['volumeInfo']['description']
        book.save
      end
    end

    private

    def author_url(max_results = 05)
      "#{BASE_URL}#{author_sanitizer(author.name)}&maxResults=#{max_results}"
    end

    def author_sanitizer(author)
      author.gsub(/\W+/, '').downcase
    end
  end
end
