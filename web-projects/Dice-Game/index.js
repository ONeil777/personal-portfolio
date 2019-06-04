var photos = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];
var random = Math.floor(Math.random() * 6);
var photosTwo = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];
var randomTwo = Math.floor(Math.random() * 6);

function rollDice(){
  document.querySelector(".dice-one").setAttribute("src", photos[random]);
  document.querySelector(".dice-two").setAttribute("src", photosTwo[randomTwo]);

  if (photos[random] > photos[randomTwo]) {
    document.querySelector("#title").innerHTML = "Player One Wins!";
  } else if (photos[random] === photosTwo[randomTwo]) {
    document.querySelector("#title").innerHTML = "Draw!";
  } else {
    document.querySelector("#title").innerHTML = "Player Two Wins!";
  }
}
