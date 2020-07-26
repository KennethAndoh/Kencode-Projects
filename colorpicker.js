var blue = "#0074d9";
var lime = "white";
var yellow = "#ffdc00";
var red = "#ff4136";

var buttonBlue = document
.getElementById("blue");
var buttonBlue = document
.getElementById("white");
var buttonBlue = document
.getElementById("yellow");
var buttonBlue = document
.getElementById("red");

var last = "";
var body = document.getElementById("body");

function color(value) {
    if (last==value) {
        buttonBlue.style.border = "none";
        buttonLime.style.border = "none";
        buttonYellow.style.border = "none";
        buttonRed.style.border = "none";
        body.style.backgroundColor = "white";
        last = "";
    } else{
        if (value === blue) {
            buttonBlue.style.border = "0.5vw dotted white";
            buttonLime.style.border = "none";
            buttonYellow.style.border = "none";
            buttonRed.style.border = "none";
        } else if (value === lime) {
            buttonLime.style.border = "0.5vw dotted white";
            buttonBlue.style.border = "none";
            buttonYellow.style.border = "none";
            buttonRed.style.border = "none";
    } else if (value === yellow) {
        buttonYellow.style.border = "0.5vw dotted white";
        buttonBlue.style.border = "none";
        buttonLime.style.border = "none";
        buttonRed.style.border = "none";
 } else if (value === red) {
    buttonRed.style.border = "0.5vw dotted white";
    buttonBlue.style.border = "none";
    buttonLime.style.border = "none";
    buttonYellow.style.border = "none";
 }  
  body.style.backgroundColor = value;
  last = value;
}
}