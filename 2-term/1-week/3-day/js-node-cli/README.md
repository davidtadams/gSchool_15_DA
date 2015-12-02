# Node CLI

## Exercises

### File Stats

When the script is run:

1. Ask the user for a filename.
1. Take the filename and get the stats on it.
1. Parse the stats and print to the console.

Stats to print:

* File size
* File name

### Write File Stats

When the script is run:

1. Ask the user for a filename.
1. Take the filename and get the stats on it.
1. Ask the user for an output filename to save the stats to.
1. Parse the stats and write it out to the output file.

Stats to store:

* File size
* File name
* File executable status
* Last time file was modified

### (Stretch) Directory Stats

When the script is run:

1. Ask the user for a directory path.
1. Take the directory path and get stats on it.
1. Get stats on each file in the directory.
1. Ask the user for an output filename.
1. Parse out all the data and store it to the output file.

Stats to store:

* Total size of all files combined
* How many files are in directory
* How many files are executable in the directory
* The biggest file size in the directory
* Most recent time a file was changed in the directory

## Hints and Tips

* Use Node's [`readline`](https://nodejs.org/api/readline.html) to get input from the user.
* Use Node's [`fs.fstat`](https://nodejs.org/api/fs.html#fs_fs_fstat_fd_callback) to get information about a file.
