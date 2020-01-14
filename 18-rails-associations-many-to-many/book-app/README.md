## Questions???
- validations
- Form tag : Validations
- validations in forms

## SWBATs
- [ ] Rebuild CRUD for books in Rails.
- [ ] Learn Rails Convention and review REstful routing and MVC.

### ActiveRecord associations
 - [ ] Add a new ActiveRecord model and associate it with an existing model
 - [ ] Display information about an associated model.
 - [ ] Allow the user to make a new instance of an ActiveRecord model that belongs to another model

## Deliverables for today's lecture
- [ ] **As a site visitor, I should be able to see a list of authors(For the purpose of this project, an author has many books and a book has many authors.)**
    1. What new model(s) do I need?
        - Class
            `author` and `authorsBook`
        - Migrations
            - remove author
            - create authors
            - create authors_books
        - Assocations
            - all the associations
        - Seeds
            - seed adapter is already modified.
    2. What route(s) do I need?
        - index -> GET `/authors`
    3. What Controller do I need?
        - index
    4. What view(s) do I need?
        - index
- [ ] **As a site visitor, I should be able to view a single author.  I should be able to see the author's name and count of books.**
    1. What new model(s) do I need?
        - author is there already
    2. What route(s) do I need?
        - show GET '/authors/:id'
    3. What Controller do I need?
        - show
    4. What view(s) do I need?
        - show
- [ ] **As a site visitor, I should be able to create a new book and associate it with all of the authors.**
    1. What new model(s) do I need?
        - authors is already there
        - books is already there
    2. What route(s) do I need?
        - GET book
        - new page
        - create -> book
        POST book
    3. What Controller do I need?
        - new 
        - create
    4. What view(s) do I need?
        -new