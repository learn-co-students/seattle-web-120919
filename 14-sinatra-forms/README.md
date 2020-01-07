# Sinatra Forms

| CRUD Letter | RESTful Route          | Controller Action |
|-------------|------------------------|-------------------|
| C(reate)    | POST   /books          | create            | 
| R(ead)      | GET    /books          | index             |
| R(ead)      | GET    /books/:id      | show              |
| U(pdate)    | PATCH  /books/:id      | update            |
| D(elete)    | DELETE /books/:id      | destroy           |

## Students Will Be Able to:
 
 - [ ] Understand the basic features of HTML forms
    - `action`
    - `method`
 - [ ] Understand the connection between form inputs and params hash
 - [ ] Implement full-stack full CRUD on a single model in Sinatra

## Deliverables

 - [ ] As a user, I should be able to view a form in the browser and enter information to create a new book
 - [ ] As a user, I should be able to view a form in the browser and enter information to update an existing book
 - [ ] As a user, I should be able to delete an existing book by clicking a "delete" button

## Questions to Ask for Each Deliverable

1. What new model(s) do I need?
    - New class?
    - New migration? (i.e. does the schema need to change?)
    - Associations?
    - Seeds?
2. What route(s) do I need?
3. What controller action(s) do I need?
    - In Sinatra, this means the code directly below the route, but in Rails it will be a separate file
4. What view(s) do I need?

## Instructions for Getting Started

To run this application, use the following bash commands:

0. `cd` into this directory
1. `bundle install`
2. `rake db:migrate`
3. `rake db:seed`
4. `shotgun`

Then using a web client, navigate to the host printed out in the terminal, e.g. `http://127.0.0.1:9393/` or `http://127.0.0.1:9393/books`
