require 'bundler'
Bundler.require

require_all 'models'

DB = SQLite3::Database.new('chinookv2.db')
DB.results_as_hash = true