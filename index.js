var randomNumber1 = Math.floor(Math.random()*6) + 1; // random 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // random dice image 1-6

var randomImageSource = "images/" + randomDiceImage; //images/dice1 - images/dice6

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"; //if player 1 win
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"; //if player 2 win
}

else {
  document.querySelector("h1").innerHTML = "Draw";
}
