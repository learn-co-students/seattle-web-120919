## SWBATs
  - [ ] Complete the deliverables that we need to work on.
  - comment -> similar to the cli app we built in mod 1.
  - same code on different computers not work.
  - used Active Record
  - tried but issues with the setup
  - everything to connect and use another gem
  - still helped in routing and goals
  RAILS Questions :
  - [ ] Path helpers and how to use them and when
  - [ ] Still some questions on association
  - [ ] Iffy about forms -> scratch or form helpers


## Questions :
  - CRUD -> Sinatra
  - Create :
    - ```GET -> '/books/new'```
    - ```POST -> '/books/:id -> '/books'```
  - Read
    - ```GET -> index - '/books'```
    - ```GET -> show - '/books/:id'```
  - Update
    - ```GET -> edit -> '/books/:id/edit'```
    - ```PATCH( or PUT) -> '/books/:id'```
  - Delete
    - ```GET -> delete -> (button) -> show -> '/books/:id'```
    - ```DELETE -> '/books'```

### High-level development practices
 - [ ] Work within a nested file structure for multiple models
 - [ ] Know which questions to ask when given a new user story
    1. What new model(s) do I need?
       - New class?
       - New migration? (i.e. does the schema need to change?)
       - Associations?
       - Seeds?
    2. What route(s) do I need?
    3. What controller action(s) do I need?
       - In Sinatra, this means the code directly below the route, but in Rails it will be a separate file
    4. What view(s) do I need?

### ActiveRecord associations
 - [ ] Add a new ActiveRecord model and associate it with an existing model
 - [ ] Display information about an associated model.
 - [ ] Allow the user to make a new instance of an ActiveRecord model that belongs to another model

## Deliverables for today's lecture
- [ ] **As a site visitor, I should be able to see a list of authors(For the purpose of this project, an author has many books and a book has many authors.)**
    1. What new model(s) do I need?
      - Class
      - 1.author  
      - 2.authors_book
      - Migrations
      - 1. create_authors
        2. create_authors_books 
        3. remove author column from books
      - Associations
        1. book -> authors_book and book -> authors
        2. author -> authors_book and authors -> books
        3. authors_book -> belongs to author && book
      - seeds
        1. have been modified to account for the relationship
    2. What route(s) do I need -> Controller?
      - GET '/authors'
    3. What view(s) do I need?
      - index.erb

- [ ] **As a site visitor, I should be able to view a single author.  I should be able to see the author's name and count of books.**
    1. What new model(s) do I need?
      - No. authors already exists
    2. What route(s) do I need?
      - get '/authors/:id'
    3. What view(s) do I need?
      - show.erb
- [ ] **As a site visitor, I should be able to create a new book and associate it with an existing author.**
  1. What new model(s) do I need?
    - noone
  2. What route(s) do I need?
    - books model/controller
    - get -> '/books/new'
    - post -> ''/books'
  3. What view(s) do I need?
    - new.erb
      

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

## Resources
1. Writing a migration to rename column and changecolumn type: http://codkal.com/how-rename-databasecolumn-rails-5-migrastion/
2. HTML form elements: https://www.w3schools.comhtml/html_form_elements.asp
3. Another reference for select in HTML : https:/www.learnhowtoprogram.com/ruby/ruby-databasebasics/select-form-fields-in-sinatra

4. Select in Sinatra forms
```html

<!-- this is if you need a dropdown menu where a user can select one thing -->
<select id="<Foreign Key Name>" name="<variable Id Name>" type="text">
  <% <Collection>.each do |item| %>
    <option value="<%=Displayed name id%>"><%= Display Name%></option>
  <% end %>
</select>

<!-- this is if you need checkboxes so that the user can select mupltiple things -->
    <% Author.all.each do |author| %>
      <label><%= author.name %></label>
      <input type="checkbox" id="author_<%=author.id%>" name="book[author_ids][]" value="<%= author.id %>"><br>
    <% end %>
```


