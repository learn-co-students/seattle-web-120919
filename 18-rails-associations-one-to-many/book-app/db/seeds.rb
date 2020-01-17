# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Book.destroy_all

Adapter::GoogleBook.new("Stephen King").fetch_books
Adapter::GoogleBook.new("H.P. Lovecraft").fetch_books
Adapter::GoogleBook.new("Brandon Sanderson").fetch_books
