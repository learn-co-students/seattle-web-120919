# require 'sqlite3'
# require 'pry'
require 'bundler'
Bundler.require


db = SQLite3::Database.new('chinook.db')