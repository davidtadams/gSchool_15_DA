## Chained Joins

```sql
SELECT employments_resumes.id,
  users.first_name,
  users.last_name,
  resumes.name,
  employments.start_year,
  employments.end_year
FROM employments_resumes
INNER JOIN employments on employments.id = employments_resumes.employment_id
INNER JOIN resumes on resumes.id = employments_resumes.employment_id
INNER JOIN users on users.id = employments.user_id
;
```

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
