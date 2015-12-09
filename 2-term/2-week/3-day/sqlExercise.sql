-- Stack Overflow SQL Exercises
  -- Get the number of posts there are.
SELECT COUNT(*) FROM posts;

  -- What are the top 50 post’s titles sorted by Score?
SELECT TOP 50 title, score FROM posts ORDER BY score DESC;

  -- How many tags are there?
SELECT Distinct COUNT(tagname) FROM tags;

  -- What were the 10 first posts on Stack Overflow?
SELECT top 10 title, creationdate from posts order by creationdate;

-- Stretch
  -- What were the first 5 Stack Overflow post titles?
SELECT top 5 title, creationdate from posts order by creationdate;

  -- How many votes marked something offensive?
select count(id) from votes where votetypeid=4;

  -- Find the instructor’s users and sort them by reputation. (I couldn't find CJ)
SELECT displayname, reputation FROM users
WHERE id=2348210 OR id=1185957 OR id=4698724
ORDER BY reputtaion DESC

  -- Get the first 5 post’s bodies containing the word ‘cowsay’.
SELECT TOP 5 Posts.body FROM posts WHERE posts.body LIKE '%cowsay%';

  -- How many posts have tags containing ‘javascript’? ‘ruby’? ‘c#’?
SELECT COUNT(*) FROM posts WHERE posts.tags LIKE '%javascript%';
SELECT COUNT(*) FROM posts WHERE posts.tags LIKE '%ruby%';
SELECT COUNT(*) FROM posts WHERE posts.tags LIKE '%c#%';

  -- How many posts with the tag ‘javascript’ have no answers? ‘ruby’? ‘c#’?
SELECT COUNT(*) FROM posts
WHERE posts.tags LIKE '%javascript%' AND posts.answercount=0;
