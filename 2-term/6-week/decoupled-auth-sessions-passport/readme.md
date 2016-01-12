# Form-based authentication with `express`, `knex`, `postgres`, `bcrypt`

Application Setup 
--

To run the app:

1. Create a .env file with a random cookie secret:

```sh
$ echo SECRET=$(node -e "require('crypto').randomBytes(48, function(ex, buf) { console.log(buf.toString('hex')) });") >> .env
```

Line 20 of app.js will use this secret to initialize the cookie-parser

```js
app.use(cookieParser(process.env.SECRET));
```

2. Install dependencies and create database:

```sh
$ npm install
$ createdb myapp
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

<hr>

Tour
--

# Routes

Line 23 of app.js defines the routes in our application.

```js
app.use('/auth', auth);
app.use('/users', users);
```

## Auth

The auth routes file (./routes/auth.js) contains the following routes:

```js
POST signup
POST signin
GET logout
```

## Users

The users routes file (./routes/users.js) contains the following routes:

```js
GET users (lists users)
GET users/:id (gets a single user)
```

Only logged in users are allowed to list users.

A logged in user can only request their own user id.

After logging in, try to make a request for another users id.


# Public

The public folder contains the static html files that are served.

## index.html

This is the main page of the app.

The user is redirected to this page when logging out.

If the user visits this page and is logged in, they will be redirected to loggedin.html

## signup.html

This form posts data to the /auth/signup route.

If a user with the given email already exists, they will be redirected to login.html

## login.html

This form posts data to the /auth/login route.

If the login is successful the user will be redirected to loggedin.html

## loggedin.html

This page is shown after a user logs in.

The page will redirect to index.html if the user is NOT logged in.
