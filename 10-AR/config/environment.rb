require 'bundler'
Bundler.require

require_all 'models'

# DB = SQLite3::Database.new('chinookv2.db')
# DB.results_as_hash = true

ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3',
    database: 'db/chinookv3.db'
)

# module ActiveRecord
#     class Base
#         ...
#     end

#     class Migration
#         ....
#     end

#     class Connect
#         ....
#     end
# end