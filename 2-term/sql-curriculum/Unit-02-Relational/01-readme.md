## Relational Databases

Suppose we were building an application that allows users to build resumes. In this data model we have tables for

- `users`,
- `resumes`,
- `employments`
- `employments_resumes`.

Logically in our application, each user may have as many employments and resumes as they want. A resume consists of multiple of employments, for which the relationship is stored in `employments_resumes`.

In the next few exercises you'll learn how to join these together.

## Setup

1. At the terminal, `cd` into this directory and run the following:

```
createdb resume_builder
psql resume_builder -f 01-statements.sql
psql -d resume_builder
```

> `createdb` is a command line utility that was installed when you ran `brew install postgresql` and it simply creates a new postgres database.  It's the same as going into `psql` and typing `create database resume_builder`.  If you need to drop that database and start over again, you can do that with `dropdb resume_builder`.

## Learn the data model

Recall that `\d` in `psql` lists all relations (or tables) in the database, and `\d table_name` lists the specific structure of `table_name`. So to get more details about these tables, spend some time getting familiar with their structure and where they connect (e.g. spots where we can join data).

To start, run the following commands:

```
psql resume_builder
\dt
\d users
\d resumes
\d employments
\d employment_resumes
```

Take a moment to draw an ERD from that includes that table names and columns names of each table, then draw the relations between each table using crow's feet notation.

See the solutions for an ERD of this data model.

## Review

Just to get into the data model a little, and review your SQL, open the `resume_builder` database with `psql`, and perform the following queries:

1. Select the `first_name` and `last_name` for all `users`.
1. Select all `resumes` (all columns).
1. Select all `employments` for `user_id = 3` and `user_id = 4` (<- would you use an `and` or and `or` here?)

## Selecting with table names / Aliasing

When joining two columns, you'll sometimes need to include two columns that have the same name.  In these cases, you'll need to specify which table it comes from, which looks like this:

```sql
select users.id, users.first_name from users;
```

Notice how the output does _not_ include the table name:

```
 id | first_name
----+------------
  1 | Ty
  2 | Joe
  3 | Hank
  4 | Ted
```

Sometimes you'll also want to rename the column, which you can do with an alias, like so:

```sql
select users.id as user_id, users.first_name from users;
```

When you run that, notice that the column name in the output is `user_id`:

```
 user_id | first_name
---------+------------
       1 | Ty
       2 | Joe
       3 | Hank
       4 | Ted
```

## Joins - Syntax

Unlike Mongo and most document databases and key-value stores, in SQL you can easily make a single query that returns data from multiple tables.  The syntax looks like this:

```sql
select * from users
inner join employments on employments.user_id = users.id;
```

In SQL newlines and spacing don't matter, so the same query might look like this:

```sql
select * from users inner join employments on employments.user_id = users.id;
```

or this...

```sql
select *
from users
inner join employments
  on employments.user_id = users.id;
```

Some things in SQL are case-sensitive, like the values in your `where` clauses, but for keywords the case doesn't matter.  So you also might see that same query look like this:

```sql
SELECT *
FROM users
INNER JOIN employments
  ON employments.user_id = users.id;
```

Notice that `ON` clause?  It doesn't matter which table is listed on which side, so these two are equivalent:

```sql
INNER JOIN employments ON employments.user_id = users.id;
```

and...

```sql
INNER JOIN employments ON users.id = employments.user_id;
```

## Inner / Left / Right Joins

There are several different ways you can join data.  Three common ways are inner join, left join and right join.

Take a few minutes to search the internet for the differences between the three - joins have been around for years, so there's a plethora of great information and articles on what they are / when to use them.

...

Have you searched yet?  No really - go do that :)

You're back?  Awesome - let's talk about how to use them.

## Multiline queries in `psql`

When you run SQL queries/commands in `psql`, you need to make sure they end with a semi-colon.  If you hit ENTER before putting a semi-colon, that's OK - just add one and hit ENTER and it will work.  That's because `psql` allows you to enter multi-line SQL statements.

When working with joins, it's often nice to enter multi-line statements.  Take one of the multi-line SQL statements from above and type it in by hand, and make sure to end it with a semi-colon.

In `psql` you can run the previous command by using the up arrow, or using `CTRL+P` (just like the command line).  When you arrow up to a multi-line command, you see the whole command (in multiple lines) and you can use arrow keys to go back through the text.  Use `CTRL+A` to go to the beginning (just like the command line) and `CTRL+E` to go to the end.

## Join'em up!

1. Select all columns from the users table, joined to all columns of the

1. Select `first_name`, `last_name`, `title`, `organization`, `start_year`, and `end_year` from the `users` table joined to the `employments` table.

1. Take the query from above and sort it by the `start_year` ascending. (hint: read this http://www.postgresql.org/docs/9.1/static/queries-order.html)

1. Select `title`, `organization`, `start_year`, and `end_year` from `employments` for `resume_id = 1` (hint: `\d employments_resumes`)

- The order of side is first in the equality doens't matter
- When there's a duplicate field name, you need to specify the table name

## Chaining Joins

Every SQL query needs to have a `from` clause.  Once you have table in the `from` clause, you can join onto it.  And you can _also_ join onto tables that have been mentioned in joins, like so:

```sql
select *
from comments
inner join articles on articles.id = comments.article_id
inner join authors on authors.id = articles.author_id
```

Knowing that, now add write a query that

- starts with the `employments_resumes` table
- includes the `id` column from the `employments_resumes` table
- includes the `first_name` and `last_name` columns from the `users` table
- includes the `name` from the `resumes` table
- includes the `start_year` and `end_year` columns from the `employments` table

You know you have it correct when your result set looks like this:

```
 id | first_name | last_name |         name         | start_year | end_year
----+------------+-----------+----------------------+------------+----------
  1 | Ty         | Cobb      | First Attempt Resume |       1905 |     1926
  2 | Ty         | Cobb      | My only              |       1927 |     1928
  3 | Ty         | Cobb      | My Favorite Rezzy    |       1921 |     1926
  4 | Joe        | DiMaggio  | Player Resume        |       1936 |     1942
  5 | Joe        | DiMaggio  | Manager Resume       |       1946 |     1951
```
