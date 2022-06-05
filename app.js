//  Toglogchiin eelj solih func
// neg dugeer togloch 0 hoer dugaar togloch 1
var activePlayer = 0;

//  Tsugluulsan ono hadgalah func
var playerCollectedScore = [0, 0];
var playerClickHold = 0;
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
  //---------------------------------------------//

  var diceNumber = Math.floor(Math.random() * 6) + 1;
  //Dice image gargah
  diceDom.style.display = "block";
  //buusan shooni image
  diceDom.src = "dice-" + diceNumber + ".png";

  ////-----------------------------------------------Toglog-solih-
  //player round score oorchlolt bolon nemelt 1 baig ym bol bvh onoo 0 bolno.
  if (diceNumber !== 1) {
    //1 ees ih buulwal roundscore luu hiine
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  }
  //1buusan tohioldol onoog 0 bolgono
  else {
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
    //1 buusan tohioldold toglogch solino
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    ///active player shiljuuleh
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
  }
});
///--------------------------------Hold-btn-
// document.querySelector(".btn-hold").addEventListener("click", function () {
//   if (playerClickHold === 0) {
//     playerClickHold = 1;
//     playerCollectedScore[activePlayer] =
//       playerCollectedScore[activePlayer] + roundScore;
//     document.getElementById("score-" + activePlayer).textContent =
//       playerCollectedScore[activePlayer];
//     roundScore = 0;
//     document.getElementById("current-" + activePlayer).textContent = 0;
//     document.querySelector(".player-0-panel").classList.toggle("active");
//     document.querySelector(".player-1-panel").classList.toggle("active");
//   } else {
//     playerClickHold = 0;
//     playerCollectedScore[activePlayer] =
//       playerCollectedScore[activePlayer] + roundScore;
//     document.getElementById("score-" + activePlayer).textContent =
//       playerCollectedScore[activePlayer];
//     roundScore = 0;
//     document.getElementById("current-" + activePlayer).textContent = 0;
//     document.querySelector(".player-1-panel").classList.toggle("active");
//     document.querySelector(".player-0-panel").classList.toggle("active");
//   }
// });
