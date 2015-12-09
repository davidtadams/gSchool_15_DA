DROP TABLE IF EXISTS employments_resumes;
DROP TABLE IF EXISTS employments;
DROP TABLE IF EXISTS resumes;
DROP TABLE IF EXISTS users;

-- create users table

CREATE TABLE users (
  id serial PRIMARY KEY,
  first_name varchar(50),
  last_name varchar(50),
  email varchar(50),
  created_at timestamp NOT NULL DEFAULT current_timestamp
);

-- create resumes table

CREATE TABLE resumes (
  id serial PRIMARY KEY,
  name varchar(50),
  user_id integer,
  created_at timestamp NOT NULL DEFAULT current_timestamp
);

-- create employments table

CREATE TABLE employments (
  id serial PRIMARY KEY,
  user_id integer,
  title varchar(50),
  organization varchar(50),
  description varchar(100),
  start_year integer,
  end_year integer,
  created_at timestamp NOT NULL DEFAULT current_timestamp
);

-- create employments_resumes table

CREATE TABLE employments_resumes (
  id serial PRIMARY KEY,
  resume_id integer references resumes(id),
  employment_id integer references employments(id)
);

-- POPULATE DATABASE:

-- create Ty Cobb as a user
INSERT INTO users (first_name, last_name, email) VALUES ('Ty', 'Cobb', 'Ty@baseball.org');

-- create a "First Attempt Resume" for Ty Cobb
INSERT INTO resumes (name, user_id) VALUES ('First Attempt Resume', (SELECT id FROM users WHERE first_name = 'Ty' AND last_name = 'Cobb'));

-- create employments for Ty Cobb:

-- Detroit Tigers (1905–1926)
INSERT INTO employments(user_id, title, organization, description, start_year, end_year) VALUES ((SELECT id FROM users WHERE first_name = 'Ty' AND last_name = 'Cobb'), 'player', 'Detroit Tigers', 'Hit the ball, do NOT strike out!', 1905, 1926);

-- Philadelphia Athletics (1927–1928)
INSERT INTO employments(user_id, title, organization, description, start_year, end_year) VALUES ((SELECT id FROM users WHERE first_name = 'Ty' AND last_name = 'Cobb'), 'player', 'Philadelphia Athletics', 'Hit the ball, do NOT strike out!', 1927, 1928);

-- As manager
-- Detroit Tigers (1921–1926)
INSERT INTO employments(user_id, title, organization, description, start_year, end_year) VALUES ((SELECT id FROM users WHERE first_name = 'Ty' AND last_name = 'Cobb'), 'manager', 'Detroit Tigers', 'Tell other people to hit the ball!', 1921, 1926);

-- Associate employments with a resume:
INSERT INTO employments_resumes (resume_id, employment_id) VALUES (
  (SELECT id FROM resumes WHERE user_id = (SELECT id FROM users WHERE first_name = 'Ty' AND last_name = 'Cobb')),
  (SELECT id FROM employments WHERE user_id = (SELECT id FROM users WHERE first_name = 'Ty' AND last_name = 'Cobb') AND title='player' AND organization='Detroit Tigers')
);

INSERT INTO employments_resumes (resume_id, employment_id) VALUES (
  (SELECT id FROM resumes WHERE user_id = (SELECT id FROM users WHERE first_name = 'Ty' AND last_name = 'Cobb')),
  (SELECT id FROM employments WHERE user_id = (SELECT id FROM users WHERE first_name = 'Ty' AND last_name = 'Cobb') AND title='player' AND organization='Philadelphia Athletics')
);

INSERT INTO employments_resumes (resume_id, employment_id) VALUES (
  (SELECT id FROM resumes WHERE user_id = (SELECT id FROM users WHERE first_name = 'Ty' AND last_name = 'Cobb')),
  (SELECT id FROM employments WHERE user_id = (SELECT id FROM users WHERE first_name = 'Ty' AND last_name = 'Cobb') AND title='manager' AND organization='Detroit Tigers')
);


-- create Joe DiMaggio as a user
INSERT INTO users (first_name, last_name, email) VALUES ('Joe', 'DiMaggio', 'Joe@baseball.org');

-- create a "My only" resume for Joe DiMaggio
INSERT INTO resumes (name, user_id) VALUES ('My only', (SELECT id FROM users WHERE first_name = 'Joe' AND last_name = 'DiMaggio'));

-- create employments for Joe DiMaggio:

-- New York Yankees (1936–1942, 1946–1951)
INSERT INTO employments(user_id, title, organization, description, start_year, end_year) VALUES ((SELECT id FROM users WHERE first_name = 'Joe' AND last_name = 'DiMaggio'), 'player', 'New York Yankees', 'Hit the ball every time!', 1936, 1942);

INSERT INTO employments(user_id, title, organization, description, start_year, end_year) VALUES ((SELECT id FROM users WHERE first_name = 'Joe' AND last_name = 'DiMaggio'), 'player', 'New York Yankees', 'Much easier than my time in World War 2...', 1946, 1951);

-- Associate employments with the "My only" resume

INSERT INTO employments_resumes (resume_id, employment_id) VALUES (
  (SELECT id FROM resumes WHERE user_id = (SELECT id FROM users WHERE first_name = 'Joe' AND last_name = 'DiMaggio')),
  (SELECT id FROM employments WHERE user_id = (SELECT id FROM users WHERE first_name = 'Joe' AND last_name = 'DiMaggio') AND organization='New York Yankees' AND start_year = 1936)
);

INSERT INTO employments_resumes (resume_id, employment_id) VALUES (
  (SELECT id FROM resumes WHERE user_id = (SELECT id FROM users WHERE first_name = 'Joe' AND last_name = 'DiMaggio')),
  (SELECT id FROM employments WHERE user_id = (SELECT id FROM users WHERE first_name = 'Joe' AND last_name = 'DiMaggio') AND organization='New York Yankees' AND start_year = 1946)
);


-- create Hank Aaron as a user
INSERT INTO users (first_name, last_name, email) VALUES ('Hank', 'Aaron', 'Hank@baseball.org');

-- create a "My Favorite Rezzy" resume for Hank Aaron
INSERT INTO resumes (name, user_id) VALUES ('My Favorite Rezzy', (SELECT id FROM users WHERE first_name = 'Hank' AND last_name = 'Aaron'));

-- create employments for Hank Aaron

-- Milwaukee / Atlanta Braves (1954–1974)
INSERT INTO employments(user_id, title, organization, description, start_year, end_year) VALUES ((SELECT id FROM users WHERE first_name = 'Hank' AND last_name = 'Aaron'), 'player', 'Milwaukee / Atlanta Braves', 'Hit the ball sometimes, sometimes miss the ball.', 1954, 1974);
-- Milwaukee Brewers (1975–1976)
INSERT INTO employments(user_id, title, organization, description, start_year, end_year) VALUES ((SELECT id FROM users WHERE first_name = 'Hank' AND last_name = 'Aaron'), 'player', 'Milwaukee Brewers', 'Always hit the ball! Never lose.', 1975, 1976);

-- Associate employments with the "My Favorite Rezzy" resume

INSERT INTO employments_resumes (resume_id, employment_id) VALUES (
  (SELECT id FROM resumes WHERE user_id = (SELECT id FROM users WHERE first_name = 'Hank' AND last_name = 'Aaron')),
  (SELECT id FROM employments WHERE user_id = (SELECT id FROM users WHERE first_name = 'Hank' AND last_name = 'Aaron') AND organization='Milwaukee / Atlanta Braves')
);

INSERT INTO employments_resumes (resume_id, employment_id) VALUES (
  (SELECT id FROM resumes WHERE user_id = (SELECT id FROM users WHERE first_name = 'Hank' AND last_name = 'Aaron')),
  (SELECT id FROM employments WHERE user_id = (SELECT id FROM users WHERE first_name = 'Hank' AND last_name = 'Aaron') AND organization='Milwaukee Brewers')
);


-- create Ted Williams as a user
INSERT INTO users (first_name, last_name, email) VALUES ('Ted', 'Williams', 'Ted@baseball.org');

-- create a "My Favorite Rezzy" resume for Hank Aaron
INSERT INTO resumes (name, user_id) VALUES ('Player Resume', (SELECT id FROM users WHERE first_name = 'Ted' AND last_name = 'Williams'));

INSERT INTO resumes (name, user_id) VALUES ('Manager Resume', (SELECT id FROM users WHERE first_name = 'Ted' AND last_name = 'Williams'));

-- create employments for Ted Williams

-- Milwaukee / Atlanta Braves (1954–1974)
INSERT INTO employments(user_id, title, organization, description, start_year, end_year) VALUES ((SELECT id FROM users WHERE first_name = 'Hank' AND last_name = 'Aaron'), 'player', 'Milwaukee / Atlanta Braves', 'Hit the ball sometimes, sometimes miss the ball.', 1954, 1974);


-- Boston Red Sox (1939–1942, 1946–1960)
INSERT INTO employments(user_id, title, organization, description, start_year, end_year) VALUES ((SELECT id FROM users WHERE first_name = 'Ted' AND last_name = 'Williams'), 'player', 'Boston Red Sox', 'Always strive to be the best player on the field.', 1939, 1942);

INSERT INTO employments(user_id, title, organization, description, start_year, end_year) VALUES ((SELECT id FROM users WHERE first_name = 'Ted' AND last_name = 'Williams'), 'player', 'Boston Red Sox', 'So much easier than jumping out of planes fighting the Axis.', 1946, 1960);

-- As manager
-- Washington Senators / Texas Rangers (1969–1972)
INSERT INTO employments(user_id, title, organization, description, start_year, end_year) VALUES ((SELECT id FROM users WHERE first_name = 'Ted' AND last_name = 'Williams'), 'manager', 'Boston Red Sox', 'So much easier to coach people than  actually play!', 1969, 1972);

-- Associate employments with the "Player Resume" resume
INSERT INTO employments_resumes (resume_id, employment_id) VALUES (
  (SELECT id FROM resumes WHERE user_id = (SELECT id FROM users WHERE first_name = 'Ted' AND last_name = 'Williams') AND name = 'Player Resume'),
  (SELECT id FROM employments WHERE user_id = (SELECT id FROM users WHERE first_name = 'Ted' AND last_name = 'Williams') AND organization='Boston Red Sox' AND start_year = 1939)
);

INSERT INTO employments_resumes (resume_id, employment_id) VALUES (
  (SELECT id FROM resumes WHERE user_id = (SELECT id FROM users WHERE first_name = 'Ted' AND last_name = 'Williams') AND name = 'Player Resume'),
  (SELECT id FROM employments WHERE user_id = (SELECT id FROM users WHERE first_name = 'Ted' AND last_name = 'Williams') AND organization='Boston Red Sox' AND start_year = 1946)
);

-- Associate employments with the "Manager Resume" resume
INSERT INTO employments_resumes (resume_id, employment_id) VALUES (
  (SELECT id FROM resumes WHERE user_id = (SELECT id FROM users WHERE first_name = 'Ted' AND last_name = 'Williams') AND name = 'Manager Resume'),
  (SELECT id FROM employments WHERE user_id = (SELECT id FROM users WHERE first_name = 'Ted' AND last_name = 'Williams') AND organization='Boston Red Sox' AND title = 'manager')
);
