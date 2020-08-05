var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);
var diceImages = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
var left = document.querySelector(".img1");
var right = document.querySelector(".img2");

left.setAttribute("src", "images/" + diceImages[randomNumber1]);
right.setAttribute("src", "images/" + diceImages[randomNumber2]);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player1 wins!";

} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player2 wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
