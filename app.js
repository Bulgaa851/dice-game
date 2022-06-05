//  Toglogchiin eelj solih func
// neg dugeer togloch 0 hoer dugaar togloch 1
var activePlayer = 0;
function playerChange() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = roundScore;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceDom.style.display = "none";
}

//  Tsugluulsan ono hadgalah func
var CollectedScore = [0, 0];
//  Toglogchiiin eeljind tsugluusan onoo ni func

var roundScore = 0;

//  Shooni ali talaara buusniih hadgalah 1-6 fun

var diceNumber = Math.floor(Math.random() * 6) + 1;

// DOM  ~ Document txt contnet
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

// Dice image class

document.querySelector(".dice").style.display = "none";

// diceDOm

var diceDom = document.querySelector(".dice");

// Click event and Dice Image

// --------------Roll Dice ----------------------//
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";

  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    playerChange();
  }
});
//----------------------------------------------------------HOLD---------------------------------//
document.querySelector(".btn-hold").addEventListener("click", function () {
  CollectedScore[activePlayer] = CollectedScore[activePlayer] + roundScore;
  document.getElementById("score-" + activePlayer).textContent =
    CollectedScore[activePlayer];
  ///hojson eshiig shalgah

  if (CollectedScore[activePlayer] > 100) {
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    playerChange();
  }
});

//New game

document.querySelector(".btm");
