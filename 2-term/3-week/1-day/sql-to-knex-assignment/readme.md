## SQL To Knex Assignment

For this assignment you will be taking your knowledge of SQL and Knex and writing the necessary Knex code to output SQL below. Fork and clone this repo and submit a pull request with your answers. You can use [http://michaelavila.com/knex-querylab/](http://michaelavila.com/knex-querylab/) to check your answers

#### Turn the following SQL queries into Knex queries (you can write them next to each SQL query or below):

1. `SELECT * FROM students;`
2. `SELECT * FROM students WHERE id=1;`
2. `SELECT * FROM students WHERE id=5; LIMIT 1`
3. `SELECT COUNT(*) students;`
4. `SELECT MIN('year') FROM students;`
5. `SELECT * FROM students WHERE name IS NOT NULL;`
6. `SELECT * FROM todos WHERE id IN ('1', '2', '3') OR user_id IN ('4', '5', '6');`
7. `SELECT * FROM students LIMIT 10 OFFSET 30;`
8. `INSERT INTO students (name,fav_color) VALUES ('tyler','purple');`
9. `INSERT INTO students (name,fav_color) VALUES ('liz','blue') RETURNING *;`
10. `UPDATE students SET name ='cho' WHERE id=5;`
11. `DELETE * FROM students;`
12. `UPDATE "students" set "score" = "score" + 10 WHERE id=1;`
13. `SELECT * FROM "students" LEFT OUTER JOIN "todos" ON "users"."id" = "todos"."user_id".`
14. `SELECT * from students RIGHT OUTER JOIN "todos" ON "students"."id" = "todos"."user_id";`

#### Answer the following questions:

1. See the documentation for `pluck` - when would a method like this be useful?
2. How do you specify that a column must be unique using Knex?
3. How do you specify that a column can not be NULL using Knex?
4. Can you also write raw SQL within knex queries? If so, how do you do that?
