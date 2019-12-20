# Active Record Notes 
- Distinguish between and define "model", "class", and "table"
- Run migrations and read their schema
- Practice with ActiveRecord::Base instance and class methods
- Perform persistent CRUD actions on one model using ActiveRecord


## Gemfile
- Requires all the gems that we are going to use in the program
- Binding -> Whatever we require we can include in the same place.
- List of whatever we need to run.

- DB -> Domain/Project
- Table -> Ruby class 
- Columns -> Class Attributes
- Rows -> Instances

## Overview

- Review Project Setup (files, migrations, models)
- Active Record - How to use it!
  - [ ] Active Record
  - [ ] Models: `ActiveRecord::Base`
- Migrations What are they?
  - [ ] Migrations
  - [ ] Schema
- Methods from Active Record
  - [ ] Important Methods ( outlined with the ORM methods from above)

## Remember These Steps!!!

1. create model => class
  a. Create the file
  b. Make the class
  c. Inherit from ActiveRecord::Base
2. create migration
  a. Run `rake db:create_migration NAME="whatever"`
  b. Edit the created migration file, adding in changes needed to be made to DB
3. run migration
  a. `rake db:migrate`
4. check your schema
5. test!

## Lecture Notes

---

### Migrations and Database Structure

- we want to create our first model \(ruby class + sql table\)––how to we bridge the gap between sql data and our ruby classes?
- What is a model? Our Ruby Class
- What is a migration? Some ruby code that alters our schema
- What is a schema? The structure of our database
- to get our database set up, we need to use the `rake db:create_migration NAME=create_boxers`
- check out the migrations in the `db/migrations` folder

  - what is the sequence of numbers in the beginning of the file name? It's a time stamp that identifies our migrations. We need these migrations to run in the order in which they were created.
  - What are the `change`, `up`, and `down` methods in migrations? These ActiveRecord methods allow us to alter our db schema.

- `create_table` method which takes a block, the block takes a table builder

  - why do we use the `t` variable?
  - `t.string :name` what is the `string` method declaring? This table will have a property called name that is a string

  ***

- run migrations `rake db:migrate`

  - Our `schema.rb` which is the **authoritative representation of the database structure**
  - look at the `version` argument in the schema to see if it matches with the last successful migration timestamp. **These should match if your migration succeeded**

  ***

- migration conventions

  - **file name and class name must match up exactly, but in different case**––for example `TIMESTAMP_create_trainers.rb` our db table is pluralized `trainers` and our model (Ruby class) is singular

    ```ruby
    class Trainer < ActiveRecord::Base
    end
    ```

  - create_table block argument is usually a `t`

- blowing up the database (DO NOT DO IN REAL LIFE)
  - delete db
  - delete schema.rb
  - !!! don't do this, just in this module, and don't do it if you can't easily get your data back
  - instead, use `rake db:rollback`
  ***
- gracefully fixing the db
  - create a new migration
  - roll that migration back
  - delete the migration files you don't want to keep
- we don't need to create migration files by hand anymore! 😍THX ACTIVERECORD😍


## Reference Code for Active Record
```ruby
## Establishing a connection with Active Record.
ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'db/pokemon.db'
)

##Gems to install
# frozen_string_literal: true
source 'https://rubygems.org'

git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }

# gem "rails"
gem "sqlite3", "~> 1.4.0"
gem 'pry'
gem 'rake'
# gem 'require_all'
gem 'activerecord', "~>5.2.3"
gem 'sinatra-activerecord'
# gem 'rest-client'

## Log SQL Queries that you need to run
ActiveRecord::Base.logger = Logger.new(STDOUT)


#Folder to include in Rake
require 'sinatra/activerecord/rake'
```

[Active Record Docs](http://edgeguides.rubyonrails.org/active_record_migrations.html#using-the-up-down-methods)




