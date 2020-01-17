## Questions???
- Code challenge questions

## SWBATs
- [ ] Rebuild CRUD for books in Rails.
- [ ] Learn Rails Convention and review REstful routing and MVC.

### ActiveRecord associations
 - [ ] Add a new ActiveRecord model and associate it with an existing model
 - [ ] Display information about an associated model.
 - [ ] Allow the user to make a new instance of an ActiveRecord model that belongs to another model

## Deliverables for today's lecture
- [ ] **As a site visitor, I should be able to see a list of authors(For the purpose of this project, an author has many books and a book belongs to one author.)**
    1. What new model(s) do I need?
       - New class?
        - `author.rb`
       - New migration? (i.e. does the schema need to change?)
        - create_table : authors with name
        - remove author from books
        - add column author_id to books
       - Associations?
        - author `has_many` books
        - books `belongs_to` author
       - Seeds?
        - create author in seed.
    2. What route(s) do I need?
        - Read -> GET '/authors' 
    3. What Controller do I need?
        - index
    3. What view(s) do I need?
        - index
- [ ] **As a site visitor, I should be able to view a single author.  I should be able to see the author's name and count of books.**
    1. What new model(s) do I need?
        - author already exists
    2. What route(s) do I need?
        - show -> GET '/authors/:id'
    3. Controller Action
        - show
    3. What view(s) do I need?
        - show
- [ ] **As a site visitor, I should be able to create a new book and associate it with an existing author.**
  1. What new model(s) do I need?
    - no new models
  2. What route(s) do I need?
    - GET book/new 
    - POST for new book
  3. What view(s) do I need?
    - new.erb
    - redirect for create