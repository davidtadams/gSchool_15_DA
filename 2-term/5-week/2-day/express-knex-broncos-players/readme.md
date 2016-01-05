# Authentication with Passport, Express & Knex

View a deployed version of the app here:

[http://broncosplayers.herokuapp.com/](http://broncosplayers.herokuapp.com/)

To run the app:

1. Create a .env file with a random cookie secret:

```sh
$ echo COOKIE_SECRET=$(node -e "require('crypto').randomBytes(48, function(ex, buf) { console.log(buf.toString('hex')) });") >> .env
```

Line 29 of app.js will use this secret to initialize the session middleware

```js
app.use(session({
  secret: process.env.COOKIE_SECRET,
  resave: true,
  saveUninitialized: true
}));
```

2. Install dependencies and create database:

```sh
$ npm install
$ createdb broncos
```

3. Run the knex migration (located in the migrations folder) to create the tables on the database:

```sh
$ knex migrate:latest
```

4. Start the app:

```sh
$ npm start
```

The app is hosted on port 3000:


[http://localhost:3000/](http://localhost:3000/)
