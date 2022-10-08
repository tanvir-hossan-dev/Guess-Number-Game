let guesses = [];

const correctNumber = getRandomNumber();
window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", resetGame);
};

function playGame() {
  var guessNumber = document.getElementById("number-guess").value;
  displayResult(guessNumber);
  saveGuesssHistory(guessNumber);
  displayHistory();
}

function displayResult(guessNumber) {
  if (correctNumber < guessNumber) {
    showNumberAbove();
  } else if (correctNumber > guessNumber) {
    showNumberBelow();
  } else if (correctNumber == guessNumber) {
    showYouWon();
  }
}

function resetGame() {
  document.getElementById("result").innerHTML = "";
  guesses = [];
  displayHistory();
  guessNumber = document.getElementById("number-guess").value = "";
}

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
}

function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon() {
  const text = "Awesome job, You got it!";

  let dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is too high";
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}
function showNumberBelow() {
  const text = "Your guess is too low";
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

// save guess numbr history
function saveGuesssHistory(guess) {
  guesses.push(guess);
}

// display history

function displayHistory() {
  let list = "<ul class='list-group'>";
  for (let index = guesses.length - 1; index >= 0; index--) {
    list += "<li class='list-group-item' >" + "You guessed " + guesses[index] + "</li>";
  }
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}
