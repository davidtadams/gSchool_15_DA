# Authentication and Authorization Review

---

# What is authentication?

<span class="fragment">Who you are</span>

---

# What is authorization?

<span class="fragment">What you can access</span>

---

# Name 2 types of Login.

<span class="fragment">Form-based, OAuth, Single Sign-On</span>

---

# Signing Up

---

# What is the first thing that happens when a user signs up?

<span class="fragment">POST request with user details in the body</span>

---

# After the POST request is made to the server, what is the next thing the server will do?

<span class="fragment">Check to see if a user exists with given email</span>

---

## If a user does not exist in the database, what will the server do with the sign up information before inserting it into the database?

<span class="fragment">Hash the password</span>

---

# What is the npm module used to hash a password?

<span class="fragment">bcrypt</span>

---

# Signing In

---

# What is the first thing that happens when a user sign ins?

<span class="fragment">POST request with user details in the body</span>

---

# After the POST request is made to the server, what is the next thing the server will do?

<span class="fragment">Check to see if a user exists with given email</span>

---

# If a user email DOES NOT exist in the database, what will the server do?

<span class="fragment">Redirect to login page or error page</span>

---

# If a user DOES exist in the database, what is the next thing the server will do?

<span class="fragment">Hash the password</span>

---

# After hashing the password, what is the next thing the server will do?

<span class="fragment">Compare the hashed password with the hash stored in the database</span>

---

# If the hashes match, what will the server do next?

<span class="fragment">Set a cookie/session and redirect</span>

---

# If the hashes DO NOT match, what will the server do next?

<span class="fragment">Redirect with error</span>

---

# Authorization

---

# What is authorization?

<span class="fragment">What you can access</span>

---

# What mechanism is used to determine if a user is logged in?

<span class="fragment">Cookies/Sessions</span>

---

## What 2 pieces of information are contained in a request that requires authorization?

<span>Who you are (Session/Cookie) and What you would like to do (url/endpoint)</span>

---

## If a user is attempting to update the resource located at `/articles/24`  What will the server do first?

<span class="fragment">Lookup the article with an id of 24</span>

---

# If the resource exists, what will the server do next?

<span class="fragment">Determine if the id of the logged in user matches the creator_id of the article</span>

---

## If the logged in user does not match the creator_id of the article, what are 2 things the server can do?

<span class="fragment">Redirect to login page, Redirect to some other page, Render/send an access denied message (401), Redirect to 404 page</span>

---

_fin_
