// Write your code in this file
var nav = document.getElementsByClassName('mainnav');
var squares = document.getElementsByClassName('square');
var footer = document.getElementsByClassName('footer');

//change nav style
nav[0].style.backgroundColor = "rgb(23,24,28)";
nav[0].children[0].style.margin = "0px";
nav[0].children[0].style.color = "rgb(204,204,204)";
nav[0].children[0].style.textAlign = "center";

//change style of divs
squares[0].style.backgroundColor = "rgb(85, 189, 186)";
squares[1].style.backgroundColor = "rgb(43, 44, 111)";
squares[2].style.backgroundColor = "rgb(22, 17, 57)";

squares[0].style.height = "300px";
squares[0].style.width = "33.33%";
squares[0].style.display = "inline-block";
squares[0].style.float = "left";

squares[1].style.height = "300px";
squares[1].style.width = "33.33%";
squares[1].style.display = "inline-block";
squares[1].style.float = "left";

squares[2].style.height = "300px";
squares[2].style.width = "33.33%";
squares[2].style.display = "inline-block";
squares[2].style.float = "left";

//change footer style
footer[0].style.backgroundColor = "#CDCDCD";
footer[0].style.padding = "1px";
footer[0].style.textAlign = "center";
