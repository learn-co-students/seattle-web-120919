# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Adapter::GoogleBooks.new("J.K Rowling").fetch_books
Adapter::GoogleBooks.new("Murakami").fetch_books
Adapter::GoogleBooks.new("Brandon Sanderson").fetch_books