let scoreStr = localStorage.getItem("score");
let score = JSON.parse(scoreStr) || {
  won: 0,
  lost: 0,
  tie: 0,
};

score.displayScore = function () {
  return `Won : ${this.won}    Lost : ${this.lost}    Tie : ${this.tie}`;
};

function resetScore() {
  score = { won: 0, lost: 0, tie: 0 };

  score.displayScore = function () {
    return `Won : ${this.won}    Lost : ${this.lost}    Tie : ${this.tie}`;
  };

  localStorage.setItem("score", JSON.stringify(score));

  alert("Score has been reset!");
  showResult();
}

function generateComputerChoice() {
  let randomNumber = Math.random() * 3;

  if (randomNumber <= 1) {
    return "Bat";
  } else if (randomNumber <= 2) {
    return "Ball";
  } else {
    return "Stump";
  }
}

function getResult(userMove, computerMove) {
  if (userMove === "Bat") {
    if (computerMove === "Ball") {
      score.won++;
      return "You Won!";
    } else if (computerMove === "Stump") {
      score.lost++;
      return "Computer Won!";
    } else {
      score.tie++;
      return "It is a Tie!";
    }
  } else if (userMove === "Ball") {
    if (computerMove === "Ball") {
      score.tie++;
      return "It is a Tie!";
    } else if (computerMove === "Stump") {
      score.won++;
      return "You Won!";
    } else {
      score.lost++;
      return "Computer Won!";
    }
  } else if (userMove === "Stump") {
    if (computerMove === "Ball") {
      score.lost++;
      return "Computer Won!";
    } else if (computerMove === "Stump") {
      score.tie++;
      return "It is a Tie!";
    } else {
      score.won++;
      return "You Won!";
    }
  }
}

function showResult(userMove, computerMove, result) {
  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector("#user-move").innerText = userMove
    ? `You have chosen ${userMove}.`
    : "";

  document.querySelector("#computer-move").innerText = computerMove
    ? `Computer chose ${computerMove}.`
    : "";

  document.querySelector("#result").innerText = result || "";
  document.querySelector(
    "#score"
  ).innerText = `No of Matches: ${score.displayScore()}`;
}
