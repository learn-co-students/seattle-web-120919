# Simple Sinatra MVC Application

This application only supports two routes: `GET /` and `GET /books`.  The first route simply returns "Hello World" and the second route utilizes an ActiveRecord `Book` model to render an index page of all the books.

To run this application, use the following bash commands:

0. `cd` into this directory
1. `bundle install`
2. `rake db:migrate`
3. `rake db:seed`
4. `shotgun`

Then using a web client, navigate to the host printed out in the terminal, e.g. `http://127.0.0.1:9393/` or `http://127.0.0.1:9393/books`
