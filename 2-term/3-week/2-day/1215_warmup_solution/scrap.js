var table = $('table')[0];
var students = [];

for (var i = 1; i < table.rows.length; i++) {
  students.push(table.rows[i].cells[0].textContent);
}
var cohorts = {
  2: ["Adam Oken", "Addison Bennett", "Alex Bennett", "Anna Huffman", "Ash Kestrel", "Ben Allred", "Brian Huber", "Chris Hutchinson", "David Adams", "David Shibley", "Derik Linch", "Elana Kopelevich", "Eli Parkhurst", "Eric Boone", "Isaac Lessard", "J Drill", "Jennifer Bennett", "Jon Casey", "Josh Ruchwarger", "Justin Lawson", "Lou Fontana", "Mike Yeager", "Noah Roston", "Ryan Douglas", "Samuel Linehan", "William Johnson", "Zac Smith"],
  3: ["April Sikes", "Aubrey Ford", "Benjamin Ebel", "Brandon Jewell", "Bryce Leonard", "Christopher Brown", "Corey Yaspan", "Helene Lavigne", "Jessica Herford", "Josh Silverstein", "Joshua Sparks", "June Shaw", "Kinsey Ashby", "Maria Morrison", "Mike Wickwar", "Mikel Howarth", "Nicolas Andruzzi", "Patrick Beam", "Patrick Dullano", "Rachel Parri", "Sam Hickman", "Scott Christensen", "Sean Brage", "Stuart Urback", "Taylor Smith", "Teisia Park", "Thomas Pasque", "Tony McKendry"],
  4: ["Alex Nishioki", "America Lopez", "Ana Curcija", "Arian Flores", "Ashley Nguyen", "Cairo Stewart", "David Leighton", "Edward Tierra", "Eric Hodges", "Greg Simpson", "Halah Salih", "Jess Yang", "Jon Tejada", "Jonathan Harlem", "Jonathan Kim", "Joshua Cantor", "Kevin Eddy", "Lissa Walzer", "Luis Rocha", "Marie Alcantara", "Mauricio Andrades", "Miles Florence", "Shashik Banda", "Simon Sekhon", "Sirinapha Dube"],
  5: ["Alya Aziz-Zaman", "Brandon Bodine", "David Bayless", "Ethan Weeks", "Hunter Hoburg", "Ian Smith", "James Shields", "Jared Mathews", "Jeremy Roelfs", "Keenan Hoffman", "Lindsay Hohn", "Lori Nitzel", "Luke Vance", "Matthew Chessman", "Matthew Mobley", "Micah Eberhard", "Saundie Weiss", "Zach Buchenau"]
}

for(var cohort_id in cohorts) {
  for (var i = 0; i < cohorts[cohort_id].length; i++) {
    var student = {
      cohort_id: cohort_id,
      name: cohorts[cohort_id][i]
    }
    $.post('http://localhost:3000/api/v1/students', student).done(function(result){
      console.log(result)
    });
  }
}

$.ajax('http://localhost:3000/api/v1/students/6', {
  type: 'DELETE'
});
