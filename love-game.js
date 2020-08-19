
document.querySelector("btn btn-danger")


var firstName=prompt("What is your name?");
var secondName=prompt("What is your friend' name?");
var loveScore = Math.random();
loveScore = loveScore * 100;
loveScore = Math.floor(loveScore) + 1;
if (loveScore > 70) {
    alert("Your love score is " + loveScore + "%" + "." + " You love each other like Romeo and Juliet");
}
if(loveScore > 30 && loveScore <= 70) {
     alert("Your love score is  " + loveScore + "%");
}

if(loveScore <= 30 ) {
     alert("Your love score is  " + loveScore + "%" + " You go together like oil and water.");
}