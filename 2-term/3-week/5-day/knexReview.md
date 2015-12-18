# knex Review

<style>
span {
	color: green;
}
</style>

---

# What is a query builder?

<span class="fragment">A software library that allows the use of objects and methods to write SQL queries in a database agnostic way.</span>

---

## What are 2 reasons to use a query builder?

---

## What are 2 reasons to use a query builder?

* Avoid long concatenated strings in code.

* Build complex SQL statements programmatically

* Automatically quotes table names and columns to prevent conflict with SQL reserved words and special characters.

* Automatically escapes parameters to reduce risk of SQL injection attacks

* Provides DB abstraction, simplifying migration to different DB platforms

---

# What command is used to initialize knex?

<span class="fragment">`knex init`</span>

---

# What file does `knex init` create?

<span class="fragment">knexfile.js</span>

---

# What does knexfile.js contain?

<span class="fragment">Connection strings for various environments</span>

---

## What is the command to create a new migration named create_students?

<span class="fragment">`knex migrate:make create_students`</span>

---

## What folder/files are created when the migration command is called?

<span class="fragment">migrations folder and CURRENTDATETIME_create_students.js</span>

---

## In a knex migration, how would you create an ID column that auto increments?

<span class="fragment">`table.increments()`</span>

---

## In a knex migration, how would you create a text column called name?

<span class="fragment">`table.string('name')`</span>

---

# How do you specify that a column can not be NULL using Knex?

---

# How do you specify that a column can not be NULL using Knex?

```js
knex.schema.createTable('address', function(table) {
  t.increments().primary();
  table.string('city',50).notNullable();
  table.string('state',2).notNullable();
  table.integer('zip',5).unsigned().notNullable();
});
```

---

## What command is used to run the latest migration?

<span class="fragment">`knex migrate:latest`</span>

---

## Write the following SQL statement in knex:

```SQL
SELECT * FROM students;
```

<span class="fragment">`knex('students').select();`</span>

---

## Write the following SQL statement in knex:

```SQL
SELECT * FROM students WHERE id=5; LIMIT 1
```

<span class="fragment">`knex('students').select()
.where({id:5}).limit(1);`</span>

---

## Write the following SQL statement in knex:

```SQL
SELECT * FROM todos
WHERE id IN ('1', '2', '3')
OR user_id IN ('4', '5', '6');
```

<span class="fragment">`knex('todos').whereIn('id', ['1', '2', '3']).orWhereIn('user_id', ['4', '5', '6']);`</span>


---

## Write the following SQL statement in knex:

```SQL
DELETE * FROM students;
```

<span class="fragment">`knex('students').del();`</span>

---

## Write the following SQL statement in knex:

```SQL
UPDATE "students" SET "score" = "score" + 10 WHERE id=1;
```

<span class="fragment">`knex('students').where({id:1})
.increment("score",10);`</span>

---

## Write the following SQL statement in knex:

```SQL
SELECT * FROM "students"
LEFT OUTER JOIN "todos" ON "students"."id" = "todos"."student_id";
```

<span class="fragment">`knex('students').leftOuterJoin('todos', 'students.id', 'todos.student_id');`</span>

---

_fin_
