"use strict";

// Variables
let scoreNumber = 20;
let randomNumber = Math.trunc(Math.random() * 20 + 1);
let highestScore = 0;

// When user clicks on the button "Check!""
document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);
  console.log(guessNumber);

  // When no number is inputted by the user
  if (!guessNumber) {
    document.querySelector(".message").textContent = "No Input Number!";

    // When the user guesses the correct number
  } else if (guessNumber === randomNumber) {
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = randomNumber;

    // When the user gets their highest score
    if (scoreNumber > highestScore) {
      highestScore = scoreNumber;
      document.querySelector(".highscore").textContent = highestScore;
    }

    // When the user guesses a wrong number (either a high or low number)
  } else if (guessNumber !== randomNumber) {
    if (scoreNumber > 1) {
      document.querySelector(".message").textContent =
        guessNumber > randomNumber ? "Too high!" : "Too low!";
      scoreNumber--;
      document.querySelector(".score").textContent = scoreNumber;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#c20b0b";
    }
  }
});

// When the user clicks on the button "Again!"
document.querySelector(".again").addEventListener("click", function () {
  scoreNumber = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".score").textContent = scoreNumber;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#5280b5";
  document.querySelector(".number").style.width = "15rem";
});
