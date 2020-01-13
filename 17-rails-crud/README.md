# Sinatra RESTful Routes
  
| CRUD Letter | RESTful Route          | Controller Action |
|-------------|------------------------|-------------------|
| C(reate)    | POST   /books          | create            |
| R(ead)      | GET    /books          | index             |
| R(ead)      | GET    /books/:id      | show              |
| U(pdate)    | PATCH  /books/:id      | update            |
| D(elete)    | DELETE /books/:id      | destroy           |

## Students Will Be Able to:

 - [ ] Explain the connection between HTTP methods and CRUD
 - [ ] Explain the connection between HTTP URL paths and CRUD
 - [ ] Implement server-side full CRUD in Sinatra
 - [ ] Use Postman to test controller actions when the view code has not been completed

## Deliverables
  - [ ] I should be able to views a list of all the books
    1. What new model(s) do I need?
    - New class?
      - book.rb
    - New migration? (i.e. does the schema need to change?)
      - create_books
    - Associations?
      - nope
    - Seeds?
      - google_books
  2. What route(s) do I need?
    - VERB -> path 
    - GET -> `/books'
  3. What controller action(s) do I need?
    - index
  4. What view(s) do I need?
    - index
 - [ ] As a user, I should be able to view the information about a particular book by providing its ID
 - [ ] As a user, I should be able to create a new book by providing form data. 
 - [ ] As a user, I should be able to update an existing book by providing its ID as well as form data
 - [ ] As a user, I should be able to delete an existing book by providing its ID

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

      

### Routes Summary
| CRUD | HTTP Verb  | Route  | Action  |  View | UsedFor |
|---|---|---|---|---|---|
| Create |GET&darr; | '/books/new'  | books#new  |'new.erb'  |  form page to create a new book |
| Create | POST | '/books'  |  books#create | Reroutes to index or show| Creates a new book in the controller   |
| Read | GET  | '/books'  | books#index  |  index.erb|  displaying information about books  |
| Read |GET  | '/books/:id'  | books#show  |  show.erb |display information about a specific book  |
|  Update | GET&darr; | 'books/:id/edit'  | books#edit| edit.erb  | Renders a form for user to edit  |
|  Update  | PATCH | 'books/:id'  | books#update  | redirects to show | updates the attributes in aspecific book |
| Delete  | "button" |  - |  - |  form with button in the show page | create a form so we can delete records and map it to an action  |
  |  Delete | Delete |  'books/:id' | books#delete | redirect to index | deletes/destroys a specific book in the DB|