### More SQL Examples

- __CRUD => Create, Read, Update, Destroy__ This is the lifecycle of data in an applicatoin.  In SQL, CRUD can be mapped to the following __INSERT, SELECT, UPDATE, DELETE__.

```
  Create	INSERT
  Read		SELECT
  Update	UPDATE
  Destroy	DELETE
```

##### Creating a Database

Click on the elephant in the top right corner of the page to open the postgres menu. Click "open psql" to open a psql terminal window. Insert the following commands in the psql terminal window. To close the window: \q.

```
CREATE DATABASE testdb;
```

Next, list all of the available databases:

```
\list
```

Now connect to the database we just created.

```
\connect testdb
```
Once we connect, our command prompt should look similar to this: ```testdb=#```

Check what tables we have in our newly created database:

```
\dt
```

At this point we should have a database with no tables in it.  So now we need to create tables.

##### Creating a Table

Let's look at the Postgres docs for __[CREATE TABLE doc](http://www.postgresql.org/docs/9.3/static/sql-createtable.html).__

The basic structure for table creation:  

```
CREATE TABLE table_name
(
   column_name1 data_type(size),
   column_name2 data_type(size),
   column_name3 data_type(size),
   ....
);
```

Example:

This is an example of a instructors table.  We will talk about the primary key soon.

```
CREATE TABLE instructors (
    id SERIAL PRIMARY KEY,
    name TEXT,
    phone_no TEXT,
    email TEXT
);
```

* Serial
* Integer
* Numeric // Numbers are exact, no rounding error
* Float // Rounding error is possible, but operations are faster than Numeric
* Text, Varchar
* Timestamp
* Boolean (True or False)

###### Dropping a Table

Let's say we no longer need the instructors table from above, to get rid of all of the data and the defiintion of the table, we can use the DROP statement.  Here are the [DROP TABLE doc](http://www.postgresql.org/docs/9.3/static/sql-droptable.html).

```
DROP TABLE instructors;
```

##### Create Table (again)

```
CREATE TABLE instructors (id SERIAL PRIMARY KEY, name TEXT, phone_no TEXT, email TEXT);
```


##### INSERT (Create part of CRUD)

The INSERT SQL command adds new data to a table.  Here are the [INSERT doc](http://www.postgresql.org/docs/9.3/static/sql-insert.html).

Below is an example INSERT command.  It inserts a instructor into the instructors database.

```
INSERT INTO instructors (name, phone_no, email) VALUES ('Spencer Eldred', '123-4567', 'spencer@galvanize.it');

INSERT INTO instructors (name, phone_no, email) VALUES ('Jeff Taggart', '987-6543', 'taggart@galvanize.it');

INSERT INTO instructors (name, phone_no, email) VALUES ('Hunter Gillane', '567-1234', 'hunter@galvanize.it');
```

Our new row of data will look something like this:

```
id		name           	phone_no	email
1   	Spencer Eldred 	123-4567	spencer@galvanize.it
2		Jeff Taggart	987-6543	taggart@galvanize.it
3		Hunter Gillane	567-1234	hunter@galvanize.it

```

Even though we did not specify an id, one was created anyways.  Since we have SERIAL as the data type of id, the database knows on a new insert to automatically assign a new unique id to the row.

##### SELECT (Read part of CRUD)

A select statement allows you to get data from the database.  Here are the [SELECT doc](http://www.postgresql.org/docs/9.3/static/sql-select.html).  Also, postgres has a good [SELECT tutorial](http://www.postgresql.org/docs/9.3/static/tutorial-select.html).  

```
SELECT * FROM instructors;

 id |      name      | phone_no |        email         
----+----------------+----------+----------------------
  1 | Spencer Eldred | 123-4567 | spencer@galvanize.it
  2 | Jeff Taggart   | 987-6543 | taggart@galvanize.it
  3 | Hunter Gillane | 567-1234 | hunter@galvanize.it
(3 rows)
```

We can specify which attributes we want.  If we only want the name and email of the instructor.  Here is the query we'd use:

```
SELECT id, name, email FROM instructors;

 id |      name      |        email         
----+----------------+----------------------
  1 | Spencer Eldred | spencer@galvanize.it
  2 | Jeff Taggart   | taggart@galvanize.it
  3 | Hunter Gillane | hunter@galvanize.it
(3 rows)
```
###### Apply various filters: WHERE, ORDER BY, ASC, and LIMIT:

This will select the name and email from instructors table **WHERE the name = "Spencer Eldred"**.

```
SELECT id, name, email FROM instructors WHERE name = 'Hunter Gillane';

 id |      name      |        email        
----+----------------+---------------------
  3 | Hunter Gillane | hunter@galvanize.it
(1 row)

```

You can also have more complex queries to get data.  You can use boolean AND and OR operations in the selector: **WHERE name = 'Spencer Eldred' OR email = 'hunter@galvanize.it'**

```
SELECT name, email FROM instructors WHERE name = 'Spencer Eldred' OR email = 'hunter@galvanize.it';

      name      |        email         
----------------+----------------------
 Spencer Eldred | spencer@galvanize.it
 Hunter Gillane | hunter@galvanize.it
(2 rows)

```
You can order your results by using **ORDER BY column_name**: **DESC** - decending or **ASC** - ascending. ASC is alphabetical order for TEXT columns.


```
SELECT id, name, email FROM instructors ORDER BY name ASC;

 id |      name      |        email         
----+----------------+----------------------
  3 | Hunter Gillane | hunter@galvanize.it
  2 | Jeff Taggart   | taggart@galvanize.it
  1 | Spencer Eldred | spencer@galvanize.it
(3 rows)

```

Your list could get really long if there were many instructors. We can limit the size of the list by using **LIMIT**.  Let's instead only get the first name and email by using **LIMIT 2**:

```
SELECT name, email FROM instructors ORDER BY name ASC LIMIT 2;

      name      |        email         
----------------+----------------------
 Hunter Gillane | hunter@galvanize.it
 Jeff Taggart   | taggart@galvanize.it
(2 rows)


```

##### UPDATE (Update part of CRUD)

The update statement is defined [UPDATE doc](http://www.postgresql.org/docs/9.3/static/sql-update.html) in the postgres docs.  It is used to change existing data in our database.

For example, use **UPDATE** if you want to change the phone number for Spencer:

```
UPDATE instructors SET phone_no='222-1234' WHERE name='Spencer Eldred';

SELECT id, name, phone_no FROM instructors WHERE name='Spencer Eldred';

 id |      name      | phone_no
----+----------------+----------
  1 | Spencer Eldred | 222-1234
(1 row)
```

##### DELETE (Destroy part of CRUD)

Deleting works similarly to a select statement.  Here are the [DELETE doc](http://www.postgresql.org/docs/9.3/static/sql-delete.html)

The statement below uses **DELETE** to destroy a specific row from the database instructors (WHERE phone_no='222-1234'):

```
DELETE FROM instructors WHERE phone_no='222-1234';

SELECT * FROM instructors;

 id |      name      | phone_no |        email         
----+----------------+----------+----------------------
  2 | Jeff Taggart   | 987-6543 | taggart@galvanize.it
  3 | Hunter Gillane | 567-1234 | hunter@galvanize.it
(2 rows)
```
** Notice that the id numbers did not change, even though id=1 was deleted. **
