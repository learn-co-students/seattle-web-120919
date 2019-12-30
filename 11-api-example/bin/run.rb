# require_relative "../models/book"

puts "Please enter a letter"
input = gets.chomp
if input == 'a'
    books = Book.all
    binding.pry
end