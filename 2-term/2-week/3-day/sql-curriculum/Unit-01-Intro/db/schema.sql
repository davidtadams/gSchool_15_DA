DROP TABLE IF EXISTS weather;
DROP TABLE IF EXISTS cities;

CREATE TABLE cities (
  id serial primary key,
  city varchar(80),
  location point
);

CREATE TABLE weather (
  id serial primary key,
  city_id int references cities(id) on delete cascade,
  temp_hi int CHECK (temp_hi > temp_lo),
  temp_lo int,
  prcp real,
  date date
);
