INSERT INTO
  cities
VALUES
  ( default, 'Boulder', point(2,5) ),
  ( default, 'Denver', point(7,2) ),
  ( default, 'Brooklyn', point(9,1) );

INSERT INTO
  weather
VALUES
  ( default, (SELECT id FROM cities WHERE city = 'Boulder'), 75, 42, 210000, now() ),
  ( default, (SELECT id FROM cities WHERE city = 'Denver'), 65, 55, 300030, now() ),
  ( default, (SELECT id FROM cities WHERE city = 'Brooklyn'), 55, 39, 120000, now() ),
  ( default, (SELECT id FROM cities WHERE city = 'Boulder'), 71, 55, 103000, ( now() - interval '1' day ) ),
  ( default, (SELECT id FROM cities WHERE city = 'Denver'), 74, 51, 300040, ( now() - interval '1' day ) ),
  ( default, (SELECT id FROM cities WHERE city = 'Brooklyn'), 72, 66, 203000, ( now() - interval '1' day ) ),
  ( default, (SELECT id FROM cities WHERE city = 'Boulder'), 81, 65, 104000, ( now() - interval '2' day ) ),
  ( default, (SELECT id FROM cities WHERE city = 'Denver'), 64, 55, 300300, ( now() - interval '2' day ) ),
  ( default, (SELECT id FROM cities WHERE city = 'Brooklyn'), 42, 36, 202000, ( now() - interval '2' day ) );
