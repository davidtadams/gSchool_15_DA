-- Think of many-to-one relationship
-- create tables for it
CREATE TABLE owners (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL UNIQUE,
  age INTEGER
);

CREATE TABLE dogs (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL UNIQUE,
  breed VARCHAR NOT NULL,
  age INTEGER,
  owner_id INTEGER REFERENCES owners(id)
);

-- populate it with data
INSERT INTO owners VALUES (default, 'David', 'Adams', 27);
INSERT INTO owners VALUES (default, 'Billy', 'Zac', 18);
INSERT INTO owners VALUES (default, 'Donald', 'Trump', 65);
INSERT INTO owners VALUES (default, 'Barack', 'Obama', null);

INSERT INTO dogs VALUES (default, 'fido', 'spaniel', 5, 1);
INSERT INTO dogs VALUES (default, 'papaya', 'mixed', 10, 1);
INSERT INTO dogs VALUES (default, 'rover', 'dane', 8, 2);

-- run queries on it
SELECT * FROM owners;

SELECT * FROM dogs;

SELECT dogs.name, dogs.breed,
  owners.first_name AS Owner_First_Name,
  owners.last_name AS Owner_Last_Name
FROM owners
INNER JOIN dogs ON (owners.id = dogs.owner_id);


--STRETCH
--add this code to a .sql file
--      DONE
--create a many to many relationship and tables for it
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL UNIQUE,
  year VARCHAR NOT NULL
);

CREATE TABLE classes (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  num VARCHAR NOT NULL
);

CREATE TABLE students_classes (
  student_id INTEGER REFERENCES students(id) ON UPDATE CASCADE,
  class_id INTEGER REFERENCES classes(id) ON UPDATE CASCADE,
  CONSTRAINT students_classes_pkey PRIMARY KEY (student_id, class_id)
);

INSERT INTO students VALUES (default, 'David', 2010);
INSERT INTO students VALUES (default, 'Ash', 2011);
INSERT INTO students VALUES (default, 'Mike', 2012);
INSERT INTO students VALUES (default, 'Roberto', 2010);

INSERT INTO classes VALUES (default, 'Databases', 'CS-343');
INSERT INTO classes VALUES (default, 'Algorithms', 'CS-329');
INSERT INTO classes VALUES (default, 'Intro to CS', 'CS-100');

INSERT INTO students_classes VALUES (1, 2);
INSERT INTO students_classes VALUES (1, 3);
INSERT INTO students_classes VALUES (2, 1);
INSERT INTO students_classes VALUES (3, 2);

SELECT
  s.name AS Student_Name,
  c.name AS Class_Name,
  c.num AS Class_Num
FROM students s
INNER JOIN students_classes sc ON (s.id = sc.student_id)
INNER JOIN classes c ON (sc.class_id = c.id)
WHERE s.name='David';

SELECT c.name AS Class_Name,
  s.name AS Student_Name
FROM classes c
INNER JOIN students_classes sc ON (c.id = sc.class_id)
INNER JOIN students s ON (sc.student_id = s.id)
WHERE c.name = 'Algorithms';

--create a many to many table that referes to itself
CREATE TABLE person (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL
);

CREATE TABLE friends (
  person_id_one INTEGER REFERENCES person(id),
  person_id_two INTEGER REFERENCES person(id)
);

INSERT INTO person(name) VALUES ('David');
INSERT INTO person(name) VALUES ('Tom');
INSERT INTO person(name) VALUES ('Caleb');
INSERT INTO person(name) VALUES ('John');
INSERT INTO person(name) VALUES ('Laura');

INSERT INTO friends VALUES (1,2);
INSERT INTO friends VALUES (1,3);
INSERT INTO friends VALUES (1,4);
INSERT INTO friends VALUES (2,1);
INSERT INTO friends VALUES (5,1);

SELECT * FROM person;
SELECT * FROM friends;
