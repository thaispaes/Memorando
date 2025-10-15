import {
  showAnimatedDificultyButton,
  noShowAnimatedButton,
  showGameElements,
} from "./animations.js";

import {
  startButton,
  easyButton,
  mediumButton,
  hardButton,
  resetButton,
  resetButtonLoser,
} from "./elements.js";
import { resetTimer } from "./time.js";

// Função para iniciar o jogo
export function startGame() {
  // Adiciona a animação de fade out ao botão
  noShowAnimatedButton();
  showAnimatedDificultyButton();
}

// Função para resetar o jogo
function resetGame() {
  resetTimer();
  window.location.reload();
}

// Adiciona evento de clique ao botão de iniciar jogo
startButton.addEventListener("click", () => startGame());
easyButton.addEventListener("click", () => showGameElements("easy"));
mediumButton.addEventListener("click", () => showGameElements("medium"));
hardButton.addEventListener("click", () => showGameElements("hard"));
resetButton.addEventListener("click", () => resetGame());
resetButtonLoser.addEventListener("click", () => resetGame());
