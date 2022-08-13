let home = document.querySelector("#homeScore");
let guest = document.querySelector("#guestScore");

let home_section = document.querySelector("#homeTeam");
let guest_section = document.querySelector("#guestTeam");

let result = document.querySelector("#result");

let homeScore = 0;
let guestScore = 0;

// home section
function onePointHome() {
  homeScore += 1;
  home.textContent = homeScore;
}

function twoPointHome() {
  homeScore += 2;
  home.textContent = homeScore;
}

function threePointHome() {
  homeScore += 3;
  home.textContent = homeScore;
}

// guest section
function onePointGuest() {
  guestScore += 1;
  guest.textContent = guestScore;
}

function twoPointGuest() {
  guestScore += 2;
  guest.textContent = guestScore;
}

function threePointGuest() {
  guestScore += 3;
  guest.textContent = guestScore;
}

//  new game

function newGame() {
  homeScore = 0;
  home.textContent = homeScore;
  guestScore = 0;
  guest.textContent = guestScore;
  home_section.classList.remove("winner");
  guest_section.classList.remove("winner");
  guest_section.classList.remove("draw");
  home_section.classList.remove("draw");
  result.textContent = "";
}

// end game

function endGame() {
  if (homeScore > guestScore && guestScore != homeScore) {
    home_section.classList.add("winner");
    guest_section.classList.remove("winner");
    result.textContent = "Home Team Wins";
    setTimeout(newGame, 2500)
  } else if (guestScore > homeScore && homeScore != guestScore) {
    guest_section.classList.add("winner");
    home_section.classList.remove("winner");
    result.textContent = "Guest Team Wins";
    setTimeout(newGame, 2500)

   
  } else {
    guest_section.classList.add("draw");
    home_section.classList.add("draw");
    result.textContent = "Match Draw";
    setTimeout(newGame, 2500)

   
  }
}

//  leader

function leader() {
  if (homeScore > guestScore) {
    document.querySelector(".score").classList.toggle("leader");
  } else if (guestScore > homeScore) {
  }
}

leader();