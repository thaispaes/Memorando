import { gameBoard, scoreBoard, cardGame, addCardEventListeners } from "./elements.js";
import { randomImages } from "./imagens.js";

export function showAnimatedGameBoard() {
    gameBoard.classList.remove("hidden");
    gameBoard.classList.add("show");
}

function showAnimatedScoreBoard() {
  if (scoreBoard) {
        scoreBoard.style.display = "flex";
        scoreBoard.style.opacity = "0";
        scoreBoard.style.transform = "translateY(20px)";
        scoreBoard.style.transition = "all 0.6s ease";

        // Anima a entrada do scoreBoard
        setTimeout(() => {
          scoreBoard.style.opacity = "1";
          scoreBoard.style.transform = "translateY(0)";
        }, 50);
      }
}

// Adiciona animação sequencial para as cartas
function showAnimateCards() {
  cardGame.forEach((card, index) => {
    // Define estado inicial das cartas
    card.style.opacity = "0";
    card.style.transform = "translateY(20px) scale(0.8)";
    card.style.transition = "all 0.5s ease";

    // Anima cada carta com delay progressivo menor para melhor sincronia
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0) scale(1)";
    }, index * 60); // Delay reduzido para 60ms
  });
}

export function showAnimatedButton(button) {
    button.classList.add("fadeOut");
    // Oculta completamente o botão
    setTimeout(() => {
      button.style.display = "none";
    }, 500);
}

export function showGameElements(dificultyLevel) {
    setTimeout(() => {
    // Remove a classe hidden e adiciona show para o gameBoard
    showAnimatedGameBoard();

    // Inicia a animação das cartas simultaneamente com o gameBoard
    showAnimateCards();

    // Gera as imagens aleatórias para o jogo
    randomImages(dificultyLevel); // Inicia o jogo com nível fácil por padrão

    // Adiciona os event listeners às cartas após elas serem criadas
    setTimeout(() => {
      addCardEventListeners();
    }, 100);

    // Mostra o scoreBoard com um pequeno delay para efeito sequencial
    setTimeout(() => {
      showAnimatedScoreBoard();
    }, 800);
  }, 500); // Espera a animação do botão terminar
}