let timerInterval;
let seconds = 0;

export function startTimer() {
  clearInterval(timerInterval); // evita duplicar timers
  seconds = 0;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    seconds++;
    updateTimerDisplay();
  }, 1000);
}

export function stopTimer() {
  clearInterval(timerInterval);
}

export function resetTimer() {
  clearInterval(timerInterval);
  seconds = 0;
  updateTimerDisplay();
}

// Inicializa o display do timer quando o módulo carrega
function initTimer() {
  updateTimerDisplay();
}

export function getElapsedTime() {
  return seconds;
}

function updateTimerDisplay() {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const timerElement = document.getElementById("timer");

  if (timerElement) {
    timerElement.textContent = `${String(minutes).padStart(2, "0")}:${String(
      secs
    ).padStart(2, "0")}`;
  }
}

// Inicializa o timer quando o módulo carrega
initTimer();
