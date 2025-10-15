
import {
  showAnimatedDificultyButton,
  noShowAnimatedButton,
  showGameElements
} from "./animations.js";

import { startButton, easyButton, mediumButton, hardButton } from "./elements.js";

// Função para iniciar o jogo
export function startGame(buttonClicked) {
  // Adiciona a animação de fade out ao botão
  noShowAnimatedButton();

  showAnimatedDificultyButton();

}

// Adiciona evento de clique ao botão de iniciar jogo
startButton.addEventListener("click", () => startGame(startButton));
easyButton.addEventListener("click", () => showGameElements("easy"));
mediumButton.addEventListener("click", () => showGameElements("medium"));
hardButton.addEventListener("click", () => showGameElements("hard"));