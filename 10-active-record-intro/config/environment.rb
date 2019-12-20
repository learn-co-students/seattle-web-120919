require 'bundler'
Bundler.require

require_relative '../models/user'
require_relative '../models/like'
require_relative '../models/tweet'

ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3',
    database: 'tweeter_ar.db'
)

# DB = {
#     conn: SQLite3::Database.new("tweeter.db")
# }

# DB[:conn].results_as_hash = true