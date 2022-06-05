///Хувьсагчид
var activePlayer = 0; //Тоглогч 1-р тоглогч=0 2-р тоглогч = 1
var CollectedScore = [0, 0]; //Тоглогчийн цуглуулсан оноо
var roundScore = 0; //Тоглогчийн нэг үед цуглуулсан оноо
//Тоглогч солих
function playerChange() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = roundScore;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}
//Шинэ -ээр эхлүүлэх function
function newGame() {
  activePlayer = 0;
  CollectedScore = [0, 0];
  roundScore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  //Шооны зураг алга болгох
  document.querySelector(".dice").style.display = "none";
  //Player 1 -ээс эхлүүлэх
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  //Нэр тохируулалт
  document.getElementById("name-0").textContent = "PLAYER 1";
  document.getElementById("name-1").textContent = "PLAYER 2";
  //Winner class арилгах
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
}
//Шооны өгөгдөл
var diceNumber = Math.floor(Math.random() * 6) + 1;
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
//Roll дархад явагдах event
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    playerChange();
    diceDom.src = "dice-1.png";
  }
});
//Hold дархад явагдах event
document.querySelector(".btn-hold").addEventListener("click", function () {
  CollectedScore[activePlayer] = CollectedScore[activePlayer] + roundScore;
  document.getElementById("score-" + activePlayer).textContent =
    CollectedScore[activePlayer];
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
    diceDom.style.display = "none";
  }
});
//New Game дархад явагдах event
document.querySelector(".btn-new").addEventListener("click", function () {
  newGame();
});
