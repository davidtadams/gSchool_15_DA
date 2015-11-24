#!/bin/bash
echo What is your name?
read NAME
echo What is your age?
read AGE
echo Storing person to \"$NAME.json\"
echo \{name: \"$NAME\", age: \"$AGE\"\} > $NAME.json

