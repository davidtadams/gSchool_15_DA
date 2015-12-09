# SQL Homework

You should fork and clone [this repository](https://github.com/gSchool/introduction_to_sql_homework).
Your homework will consist of two .sql files, one to create the database and one that contains
all of the other commands.
We will grade this homework by running the files
against our local servers and expect them to run without errors the first time.
You can experiment in psql with each of the commands
before saving the command to the .sql file. Remember that once
you create a database or a table, you will need to drop it before
creating it again. You can make sure you files run by using the following
commands from the command line:

* `psql -d postgres -U gschool_user -f create_url_shortener_database.sql`
* `psql -d url_shortener_(your_first_name)_(your_last_name) -U gschool_user -f all_of_the_other_commands.sql`

1. Create a new database called 'url_shortener_(your_first_name)\_(your_last_name)'.
1. Create a new table called 'urls'. This table should have the columns that you need to store
a shortened URL (id, original_url and count)
    * The id field should be the primary key and should auto increment.
    * The original_url column should not allow null values.
    * The count field should default to 0.
1. Insert 5 rows of data into the 'urls' table.
    * Give each one a different original_url.
    * Give each one a different count.
1. Display all of the rows in the urls table with all of the columns
1. Display all of the rows in the urls table with only the original_url column
1. Display one row from the urls table with a specific id
1. Display one row from the urls table with a specific original_url
1. Update one of the rows with a specific id to have a new count
1. Delete one row that matches an original_url
