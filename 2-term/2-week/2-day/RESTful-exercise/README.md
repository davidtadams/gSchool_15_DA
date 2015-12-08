# RESTful Exercise

Create a puppy CRUD app, where users can see a list of puppies, individual puppies, add new puppies, edit puppy info, and remove puppies from the list.

## Routes

GET ‘/puppies’ - shows all resources

GET ‘puppies/new’ - shows new create new resource page

POST ‘puppies/new’ - creates individual

GET ‘puppies/:id’ - shows individual resource

GET ‘puppies/:id/edit’ - shows edit page of individual resource

PUT  ‘puppies/:id’ - updates individual resource

DELETE ‘puppies/:id’ - removes resource

## Technologies

- [ExpressJS](http://expressjs.com/en/index.html)
- [Lowdb](https://github.com/typicode/lowdb)
- [Jade](http://jade-lang.com)

## Usage

`npm install`

run with `nodemon`
