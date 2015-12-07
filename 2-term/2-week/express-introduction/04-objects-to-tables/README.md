# Iterating in views

You know how to write `for` loops in JavaScript, and in this exercise you'll figure out how to write `for` loops in a view template.

## Setup

Generate a new Express app, be sure to specify `--git`.

Which view template engine should you use?  Start with `ejs` - the syntax for `ejs` is very similar to JavaScript.

Then run:

```
npm install
nodemon
```

## Requirements

1. Take the array of objects (provided below) and display them in a table.
1. Figure out how to style the table to look like this:
![](wireframes/table.png)
1. (you can make the first name of each person a link to `#`)

Take the generated HTML and paste it into [http://validator.w3.org/nu/#textarea](http://validator.w3.org/nu/#textarea) to be sure your HTML table has valid markup.

## Data

Drop the following javascript snippet into `lib/data.js`:

```js
module.exports = {
  all: [
    {
      "first_name": "Dale",
      "last_name": "Gaylord",
      "date_of_birth": "2006-05-28",
      "eye_color": "brown",
      "telephone_number": "(236) 819-4732"
    },
    {
      "first_name": "Cynthia",
      "last_name": "Hyatt",
      "date_of_birth": "2004-02-29",
      "eye_color": "hazel",
      "telephone_number": "998.099.6596"
    },
    {
      "first_name": "Lea",
      "last_name": "Kub",
      "date_of_birth": "2002-02-18",
      "eye_color": "brown",
      "telephone_number": "1-393-106-9254"
    },
    {
      "first_name": "Hoyt",
      "last_name": "Volkman",
      "date_of_birth": "1997-10-28",
      "eye_color": "green",
      "telephone_number": "524-770-2541 x3837"
    },
    {
      "first_name": "Hulda",
      "last_name": "Heller",
      "date_of_birth": "2010-10-22",
      "eye_color": "brown",
      "telephone_number": "(752) 604-9297 x4974"
    },
    {
      "first_name": "Genevieve",
      "last_name": "Schmidt",
      "date_of_birth": "2007-11-09",
      "eye_color": "blue",
      "telephone_number": "(804) 793-3547 x13416"
    },
    {
      "first_name": "Litzy",
      "last_name": "Hahn",
      "date_of_birth": "2004-02-05",
      "eye_color": "hazel",
      "telephone_number": "795-391-9845 x32676"
    },
    {
      "first_name": "Casper",
      "last_name": "Roob",
      "date_of_birth": "1999-04-24",
      "eye_color": "brown",
      "telephone_number": "1-635-728-6463"
    },
    {
      "first_name": "Lizeth",
      "last_name": "Lowe",
      "date_of_birth": "1996-06-18",
      "eye_color": "brown",
      "telephone_number": "(944) 358-2909 x34650"
    },
    {
      "first_name": "Maxie",
      "last_name": "Hirthe",
      "date_of_birth": "2000-10-31",
      "eye_color": "hazel",
      "telephone_number": "297-535-0918"
    },
    {
      "first_name": "Velva",
      "last_name": "Bradtke",
      "date_of_birth": "2003-08-15",
      "eye_color": "brown",
      "telephone_number": "696.150.1136 x15246"
    },
    {
      "first_name": "Eugenia",
      "last_name": "Lueilwitz",
      "date_of_birth": "1997-12-22",
      "eye_color": "brown",
      "telephone_number": "(562) 227-0859 x912"
    },
    {
      "first_name": "Justina",
      "last_name": "Schiller",
      "date_of_birth": "1996-03-28",
      "eye_color": "blue",
      "telephone_number": "364-554-0635"
    },
    {
      "first_name": "Earnestine",
      "last_name": "Dickinson",
      "date_of_birth": "2000-09-01",
      "eye_color": "hazel",
      "telephone_number": "396-246-9116 x88228"
    },
    {
      "first_name": "Demarcus",
      "last_name": "Kohler",
      "date_of_birth": "2002-05-06",
      "eye_color": "hazel",
      "telephone_number": "1-806-248-0512"
    },
    {
      "first_name": "Percy",
      "last_name": "Harvey",
      "date_of_birth": "2009-10-03",
      "eye_color": "hazel",
      "telephone_number": "(900) 200-2082"
    },
    {
      "first_name": "Elbert",
      "last_name": "Johnston",
      "date_of_birth": "2009-03-28",
      "eye_color": "brown",
      "telephone_number": "143.061.9699"
    },
    {
      "first_name": "Tyler",
      "last_name": "Koch",
      "date_of_birth": "2001-02-06",
      "eye_color": "green",
      "telephone_number": "(176) 843-9801 x64549"
    },
    {
      "first_name": "Dangelo",
      "last_name": "Parker",
      "date_of_birth": "2010-01-18",
      "eye_color": "green",
      "telephone_number": "836.062.2250 x5750"
    },
    {
      "first_name": "Caesar",
      "last_name": "Watsica",
      "date_of_birth": "2009-11-15",
      "eye_color": "brown",
      "telephone_number": "(809) 625-2175"
    },
    {
      "first_name": "Briana",
      "last_name": "Zieme",
      "date_of_birth": "1996-07-09",
      "eye_color": "blue",
      "telephone_number": "1-859-191-3773 x56698"
    },
    {
      "first_name": "Jerrod",
      "last_name": "Hansen",
      "date_of_birth": "2005-05-06",
      "eye_color": "blue",
      "telephone_number": "711.367.2249 x6018"
    },
    {
      "first_name": "Stephen",
      "last_name": "Bosco",
      "date_of_birth": "1996-04-29",
      "eye_color": "brown",
      "telephone_number": "358-163-5440"
    },
    {
      "first_name": "Alivia",
      "last_name": "Lindgren",
      "date_of_birth": "1997-10-20",
      "eye_color": "brown",
      "telephone_number": "1-499-143-8908 x98610"
    },
    {
      "first_name": "Maye",
      "last_name": "Toy",
      "date_of_birth": "2001-04-22",
      "eye_color": "blue",
      "telephone_number": "948.260.1910 x64651"
    },
    {
      "first_name": "Ed",
      "last_name": "Tromp",
      "date_of_birth": "2002-12-25",
      "eye_color": "blue",
      "telephone_number": "(376) 244-4740"
    },
    {
      "first_name": "Lonny",
      "last_name": "Prohaska",
      "date_of_birth": "2001-01-31",
      "eye_color": "green",
      "telephone_number": "952-458-2787 x804"
    },
    {
      "first_name": "Olin",
      "last_name": "Bednar",
      "date_of_birth": "1997-10-22",
      "eye_color": "blue",
      "telephone_number": "(118) 021-7770 x453"
    },
    {
      "first_name": "Kitty",
      "last_name": "Cassin",
      "date_of_birth": "1999-04-29",
      "eye_color": "blue",
      "telephone_number": "1-723-241-1547 x69993"
    },
    {
      "first_name": "Aracely",
      "last_name": "Klein",
      "date_of_birth": "1999-10-04",
      "eye_color": "hazel",
      "telephone_number": "(980) 723-9878 x1377"
    }
  ]
};
```
