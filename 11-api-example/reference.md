# Starter Questions
- A way a company gives their data

## Gems to use 
```Ruby
gem "sqlite3", "~> 1.4.0"
gem 'pry'
gem 'rake'
gem 'require_all'
gem 'activerecord', "~>5.2.3"
gem 'sinatra-activerecord'
gem 'rest-client'
```

## Active Record Connection String

```Ruby
ActiveRecord::Base.establish_connection(adapter: 'sqlite3', database: 'db/development.db')
```


## URL for the API
`url = "https://www.googleapis.com/books/v1/volumes?q=The+bible"`


## Sample API code from the google books API
```Ruby
require_relative '../config/environment'

# url = "https://www.googleapis.com/books/v1/volumes?q=The+bible"

# Get the body data form RESTClient RESTClient.get
response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=The+bible")

# Format the data as JSON with JSON.parse
json_data = JSON.parse(response)

books = json_data["items"]

books.each do |book|
  puts "**************************************************"
  title = book["volumeInfo"]["title"]
  published_date = book["volumeInfo"]["publishedDate"]
  description = book["volumeInfo"]["description"][0]
  country = book["accessInfo"]["country"]
  Book.create(title: title, publishedDate: published_date, description: description, country: country)
  puts "Title: " +      title
  puts "Date : " + published_date
  puts "description: " + description
  puts "Country: " + country
end
```
