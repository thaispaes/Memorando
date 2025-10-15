import { selectedImage } from "./imagens.js";
import {
  showGameElements,
  showAnimatedButton
} from "./animations.js";
import { dificultyLevel } from "./dificultyLevel.js";
import { startButton } from "./elements.js";

// Adiciona evento de clique ao botão de iniciar jogo
startButton.addEventListener("click", () => startGame(startButton));

// Função para iniciar o jogo
function startGame(buttonClicked) {
  // Adiciona a animação de fade out ao botão
  showAnimatedButton(buttonClicked);

  // Após a animação do botão, mostra o gameBoard e scoreBoard
  showGameElements(dificultyLevel.easy); // Inicia o jogo com nível fácil por padrão
}
