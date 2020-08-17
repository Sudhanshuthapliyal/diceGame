

var randomnumber= Math.random();
randomnumber=Math.floor(randomnumber*6)+1;
var randomDiceImage="images/dice"+randomnumber+".png";
document.querySelector(".img1").setAttribute("src" , randomDiceImage);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="images/dice"+randomnumber2+".png";
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

if (randomnumber > randomnumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomnumber2 > randomnumber) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
