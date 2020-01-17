## Questions???
- Code challenge questions

## SWBATs
- [ ] Rebuild CRUD for books in Rails.
- [ ] Learn Rails Convention and review REstful routing and MVC.

### Deliverables

- [ ] **As a site visitor, I should be able to see a list of authors(For the purpose of this project, an author has many books and a book has many authors.)**
    - Model
    - class: 
        - author.rb
        - could have a join class
        - authors_book.rb

    - Assocations
        `has_many_and_belongs_to :books`
        ` has_many :authors_books`
        `has_many :books, throug: :authors_books`

    - migrations:
        - create `authors`
        - create `authors_books`
            - with author_id and book_id
        - remove `author` from books  
    - seeds.rb

    - Routes
        - get '/authors', to: "authors#index" 
    - Controller
        - index
    - View
        - index

- [ ] **As a site visitor, I should be able to view a single author.  I should be able to see the author's name and count of books.**

- [ ] **As an author, I should be able to create a new book and associate with as many authors**

- [ ] **As a site visitor, I should be able to create a new book and associate it with an existing author.**