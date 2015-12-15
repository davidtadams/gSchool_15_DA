# Learn SQL: Structured Query Language

In this example we will be working with: PostgreSQL [Postgres Documentation](http://www.postgresql.org/docs/9.4/interactive/index.html). For a list of relational database management systems (RDBMS) see: [RDBMS List](https://en.wikipedia.org/wiki/Comparison_of_relational_database_management_systems)

Further reading on SQL: [SQL Wikipedia](https://en.wikipedia.org/wiki/SQL)

Great Resources:

- [PostgreSQL Commands](http://www.postgresql.org/docs/9.4/interactive/sql-commands.html)
- [PostgreSQL Coding Conventions](http://www.postgresql.org/docs/9.4/interactive/source.html)

## Objectives
------------------

By the end of this unit, you should be able to:

* Describe what an RDBMS is and why you use it
* Describe / draw the structure of an RDBMS
* Execute commands to
  * create a new database
  * create a new table
  * insert data into a table with `insert`
  * display all rows from a table
  * display a certain subset of columns for a row using the `select` clause
  * display specific rows from a table using a `where` clause
  * update a set of rows
  * delete one/many rows
  * drop a table/database

## Installation
------------------

Postgres Installation & Startup
-------------------------------

Make sure that [Homebrew](http://brew.sh/) has the latest formulas and then install PostgreSql.
When you are done, make sure PostgreSql was installed and set it to auto start whenever you computer starts.

With `homebrew` installed, you can run `brew install postgresql`. If not, you can download it here: [PostgreSQL](http://www.postgresql.org/download/)

```
$ brew doctor
```

Make sure it says that you are "ready to brew".  If not, fix all errors first.  Do NOT type `sudo brew...`.

```
$ brew update
$ brew install postgres
```

Before you can connect to `postgres` you must startup the server. Follow the instructions in the brew install to have postgres start at login.  The commands look something like this:

```
$ ln -sfv /usr/local/opt/postgresql/*.plist ~/Library/LaunchAgents
$ launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist
```

> NOTE: those may not be the _EXACT_ commands.  Copy the ones provided that look similar.

> NOTE: if you clear your terminal, you can get them back with `brew info postgres`.

Now your database should be running.  To create your default database, run:

```
createdb
```

Check that `psql` has been installed correctly by typing:

```
$ psql --version
```

You should see something like: `psql (PostgreSQL) 9.3.2` (the version number may be higher, that's OK).

Now you should be able to run:

```
psql
```

And you'll be in an interactive postgres terminal session.

To get out of `psql` use `CTL+d` or type `\q`.

## Intro to RDBMS

- **R**elational
- **D**atabase
- **M**anagement
- **S**ystem

<!--** comment inserted so github markdown editing syntax highlighting doesn't break -->

An RDBMS is comprised of:

- A server, which can hold multiple databases
  - A database, which can hold multiple tables, indexes and foreign key relationships (among other things)
  - A table, which is comprised of columns and rows
- A client
  - `psql` is a client
  - your Node app will be a client as well

Clients make _requests_ to servers using a special language, SQL (structured query language), and servers return _responses_ - typically called result sets - that clients then parse.

A server is like a web server - it's a running process on your machine that's waiting to get requests.

Tables are made up of columns.  Each column has:

- a name
- a data type
- (potentially) constraints (like being not nullable, unique or referencing columns in other tables)
- (potentially) special behaviors such as auto-incrementing integer fields

## Intro to SQL

There are two types of SQL commands:

- DDL - data definition language
- DML - data manipulation language

> In addition, there are special commands you type _only_ when inside the `psql` REPL - these are NOT SQL commands, but rather just `psql` commands.  `psql` commands start with `\` - like `\q`, `\dt`, `\l` and `\c`.

### DDL (Data Definition Language)

Data Definition Language (DDL) affects _The schema of a database._  That is to say, tables, columns and relationships.  Common DDL commands are:

- Create a database
- Create a table
- Drop a table

Read more on Datatypes:
- serial [Numeric types](http://www.postgresql.org/docs/9.0/static/datatype-numeric.html)
- varchar [Character types](http://www.postgresql.org/docs/9.2/static/datatype-character.html)
- point [Geometric types](http://www.postgresql.org/docs/9.2/static/datatype-geometric.html)
- int [Numeric types](http://www.postgresql.org/docs/9.0/static/datatype-numeric.html)
- real [Numeric types](http://www.postgresql.org/docs/9.0/static/datatype-numeric.html)
- date [Data/time types](http://www.postgresql.org/docs/9.2/static/datatype-datetime.html)

What's the difference between `varchar` and `text`?  `varchar` is for strings (for example strings that would be entered via an html `input` field) where as `text` fields are for large blobs of text and they are slower to insert / query.  So choose `varchar` unless you are storing amounts of text larger than, say, 1000 characters.

### Data Manipulation Language (DML):

Whereas DDL affects the _schema_ of the database, DML _interacts with the data._  That is to say, DML affects tables / column definitions, and DML affects _rows_.

- Select
- Update
- Delete
- Insert
- Join

## Exercise - weatherapp

Create the database:

```
$ psql
user=# CREATE DATABASE weatherapp;
```

Quit `psql` with `CTRL+d` or by typing `\q`.

> NOTE: `$` indicates you should run something on the command line.
> `user=#` indicates you should run something from within `psql`.

Load the schema

```
$ psql "weatherapp" < db/schema.sql
```

Load the seed data

```
$ psql "weatherapp" < db/seed.sql
```

## Query

To be able to run queries on our database. You must first `\connect` or `\c` to the `weatherapp` database. Type `\dt` to list all _database tables_.

```
$ psql
user=# \connect weatherapp
```

List all of the `weatherapp` database tables:

```
user=# \dt

  List of relations
   Schema |  Name   | Type  | Owner
  --------+---------+-------+-------
   public | cities  | table | <your-name>
   public | weather | table | <your-name>
```

Describe the table using `\d+ <table-name>`

```
user=# \d+ cities

  Table "public.cities"
    Column  |         Type          |                      Modifiers                      | Storage  | Stats target | Description
  ----------+-----------------------+-----------------------------------------------------+----------+--------------+-------------
   id       | integer               | not null default nextval('cities_id_seq'::regclass) | plain    |              |
   city     | character varying(80) |                                                     | extended |              |
   location | point                 |                                                     | plain    |              |

  Indexes:
  "cities_pkey" PRIMARY KEY, btree (id)

  Referenced by:
  TABLE "weather" CONSTRAINT "weather_city_id_fkey" FOREIGN KEY (city_id) REFERENCES cities(id)
```

Resources on [Index types](http://www.postgresql.org/docs/9.2/static/indexes-types.html)

`SELECT` all records from a table

```
user=# SELECT * FROM cities;
user=# SELECT * FROM weather;
```

`SELECT` a specific record from a table

```
user=# SELECT * FROM cities WHERE city = 'Boulder';

   id |  city   | location
  ----+---------+----------
    1 | Boulder | (2,5)
```

Updating records with `UPDATE`:

```
user=# UPDATE
    weather
  SET
    temp_lo = temp_lo+1, temp_hi = temp_lo+15, prcp = DEFAULT
  WHERE
    city_id = 1;


user=# SELECT * FROM weather WHERE city_id = 1;

 id | city_id | temp_lo | temp_hi | prcp |    date
----+---------+---------+---------+------+------------
  1 |       1 |      76 |      90 |      | 2015-11-10
  4 |       1 |      72 |      86 |      | 2015-11-09
  7 |       1 |      82 |      96 |      | 2015-11-08

```

Create a record with `INSERT`:

```
user=# INSERT INTO
    cities
  VALUES
    (default, 'Queens', point(10,27));

user=# SELECT * FROM cities;
   id |   city   | location
  ----+----------+----------
    1 | Boulder  | (2,5)
    2 | Denver   | (7,2)
    3 | Brooklyn | (9,1)
    4 | Queens   | (10,27)

```

user=# Create a record with `INSERT` and return it's `id`:

```
INSERT INTO cities VALUES (default, 'New York', point(32,78)) RETURNING id;

  id
  ----
   4
  (1 row)
```

Delete a record and all of it's `foreign key` relationships. This works because the schema is created as `city_id int references cities(id) on delete cascade`:

```
user=# DELETE FROM cities WHERE city = 'Boulder';
```

Example of a simple `join`. Queries can access multiple tables at once, or access the same table in such a way that multiple rows of the table are being processed at the same time. A query that accesses multiple rows of the same or different tables at one time is called a join query[...](http://www.postgresql.org/docs/8.3/static/tutorial-join.html)

```
user=# SELECT * FROM cities, weather WHERE cities.id = weather.city_id;

   id |   city   | location | id | city_id | temp_lo | temp_hi |  prcp  |    date
  ----+----------+----------+----+---------+---------+---------+--------+------------
    1 | Boulder  | (2,5)    |  1 |       1 |      75 |      42 | 210000 | 2015-11-10
    2 | Denver   | (7,2)    |  2 |       2 |      65 |      55 | 300030 | 2015-11-10
    3 | Brooklyn | (9,1)    |  3 |       3 |      55 |      39 | 120000 | 2015-11-10
    1 | Boulder  | (2,5)    |  4 |       1 |      71 |      55 | 103000 | 2015-11-09
    2 | Denver   | (7,2)    |  5 |       2 |      74 |      51 | 300040 | 2015-11-09
    3 | Brooklyn | (9,1)    |  6 |       3 |      72 |      66 | 203000 | 2015-11-09
    1 | Boulder  | (2,5)    |  7 |       1 |      81 |      65 | 104000 | 2015-11-08
    2 | Denver   | (7,2)    |  8 |       2 |      64 |      55 | 300300 | 2015-11-08
    3 | Brooklyn | (9,1)    |  9 |       3 |      42 |      36 | 202000 | 2015-11-08
```

Another way to write an `INNER JOIN`:

```
SELECT * FROM cities INNER JOIN weather ON (cities.id = weather.city_id);
```

Attempt to `INSERT` an invalid record:

```
user=# INSERT INTO weather VALUES (default, 1, 44, 88, 243433, now());
  ERROR:  new row for relation "weather" violates check constraint "weather_check"
  DETAIL:  Failing row contains (10, 1, 44, 88, 243433, 2015-11-10).
```

`DROP` an entire table

```
user=# DROP TABLE cities CASCADE;

user=# \dt
  List of relations
   Schema |  Name   | Type  | Owner
  --------+---------+-------+-------
   public | weather | table | fa
  (1 row)
```

[SQL Prepared Statements](http://www.postgresql.org/docs/9.2/static/sql-prepare.html)

```
PREPARE
  city ( varchar, point )
AS INSERT INTO
  cities ( id, city, location )
VALUES
  ( default, $1, $2 );

EXECUTE city ( 10, 'Bronx', point(13,34) );
```

### More References

* [Relational Database](http://en.wikipedia.org/wiki/Relational_database)
* [PostgreSql](http://www.postgresql.org/)
* [PostgreSql Documentation](http://www.postgresql.org/docs/9.3/static/index.html)


### Background on relational databases

* [Creating a Database](http://www.postgresql.org/docs/9.3/static/manage-ag-createdb.html)
* [Tables/Data Definition](http://www.postgresql.org/docs/9.3/static/ddl-basics.html)
* Rows
    * [Primary key](http://www.postgresql.org/docs/9.3/static/ddl-constraints.html#DDL-CONSTRAINTS-PRIMARY-KEYS)
* Columns
    * [Data types](http://www.postgresql.org/docs/9.3/static/datatype.html)
    * [Default values](http://www.postgresql.org/docs/9.3/static/ddl-default.html)
    * [Null / Not null](http://www.postgresql.org/docs/9.3/static/ddl-constraints.html#AEN2463)
* [Inserting data](http://www.postgresql.org/docs/9.3/static/dml-insert.html)
* [Querying data](http://www.postgresql.org/docs/9.3/static/queries-overview.html)
    * [Filtering with WHERE](http://www.postgresql.org/docs/9.3/static/queries-table-expressions.html#QUERIES-WHERE)
* [Updating data](http://www.postgresql.org/docs/9.3/static/dml-update.html)
* [Deleting data](http://www.postgresql.org/docs/9.3/static/dml-delete.html)

Common Questions
----------------

  * What is a Primary Key?

It denotes an attribute on a table that can uniquely identify the row.

  * What does SERIAL Do?

SERIAL tells the database to automatically assign the next unused integer value to id whenever we insert into the database and do not specify id.  In general, if you have a column that is set to SERIAL, it is a good idea to let the database assign the  value for you.

  * Data Types

Similar to how Ruby has types of data, SQL defines types that can be stored in the DB. Here are some common ones:

Read up on Constraints

- [foreign keys](http://www.postgresql.org/docs/9.3/static/ddl-constraints.html#DDL-CONSTRAINTS-FK)
- [primary keys](http://www.postgresql.org/docs/9.3/static/ddl-constraints.html#DDL-CONSTRAINTS-PRIMARY-KEYS)
- Schema Constraints
