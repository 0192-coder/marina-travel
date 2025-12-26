let score = 0;
let timeLeft = 20;
let timer = null;

function startGame() {
  score = 0;
  timeLeft = 20;
  updateUI();

  const pearl = document.getElementById("pearl");
  pearl.style.left = randomPos(80) + "%";
  pearl.style.top = randomPos(60) + "%";

  if (timer) clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    updateUI();
    if (timeLeft <= 0) endGame();
  }, 1000);
}

function hitPearl() {
  if (timeLeft <= 0) return;
  score++;
  const pearl = document.getElementById("pearl");
  pearl.style.left = randomPos(80) + "%";
  pearl.style.top = randomPos(60) + "%";
  updateUI();
}

function endGame() {
  clearInterval(timer);
  timer = null;
  document.getElementById("status").textContent =
    `Time up! Final score: ${score}. Press Start to play again.`;
}

function updateUI() {
  document.getElementById("score").textContent = score;
  document.getElementById("time").textContent = timeLeft;
  document.getElementById("status").textContent =
    "Click the pearl as many times as you can!";
}

function randomPos(max) {
  return Math.floor(Math.random() * max);
}
