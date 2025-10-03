import { randomImages, selectedImage } from "./imagens.js";
import {
  flipCard,
  showAnimatedGameBoard,
  showAnimatedScoreBoard,
  showAnimateCards,
} from "./animations.js";
import { dificultyLevel } from "./dificultyLevel.js";
import { startButton, cardGame, cardGameImageSelected } from "./elements.js";



// Adiciona evento de clique ao botão de iniciar jogo
startButton.addEventListener("click", () => startGame(startButton));

// Função para adicionar event listeners às cartas após o jogo iniciar
function addCardEventListeners() {
  const cards = document.querySelectorAll(".cardGame");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      // Usa a função selectedImage que já gerencia a lógica do jogo
      selectedImage(card);
    });
  });
}

// Função para iniciar o jogo
function startGame(buttonClicked) {
  // Adiciona a animação de fade out ao botão
  buttonClicked.classList.add("fadeOut");

  // Após a animação do botão, mostra o gameBoard e scoreBoard
  setTimeout(() => {
    // Oculta completamente o botão
    buttonClicked.style.display = "none";
    // Remove a classe hidden e adiciona show para o gameBoard
    showAnimatedGameBoard();

    // Inicia a animação das cartas simultaneamente com o gameBoard
    showAnimateCards();

    // Gera as imagens aleatórias para o jogo
    randomImages(dificultyLevel.easy); // Inicia o jogo com nível médio por padrão

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
