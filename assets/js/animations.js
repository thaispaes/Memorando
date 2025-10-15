import { setLevel, getLevel } from "./dificultyLevel.js";
import {
  gameBoard,
  scoreBoard,
  cardGame,
  addCardEventListeners,
  difficultyBoard,
  startButton,
} from "./elements.js";
import { randomImages, createCardGame } from "./imagens.js";

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

// Anima o botão de iniciar jogo na hora de sair de tela
export function noShowAnimatedButton() {
  startButton.classList.add("fadeOut");
  // Oculta completamente o botão
  setTimeout(() => {
    startButton.style.display = "none";
  }, 500);
}

// Anima o botão de iniciar jogo na hora de sair de tela
export function noShowAnimatedDificultyButton() {
  difficultyBoard.classList.add("fadeOut");
  // Oculta completamente o botão
  setTimeout(() => {
    difficultyBoard.style.display = "none";
  }, 500);
}

function showAnimatedLevelBoard() {
  // Remove a classe hidden e adiciona show
  difficultyBoard.classList.remove("hidden");
  difficultyBoard.classList.add("show");
}

// Anima os botões de seleção de nível de dificuldade
export function showAnimatedDificultyButton() {
  showAnimatedLevelBoard();

  // Seleciona o título e os botões para animar
  const difficultyTitle = difficultyBoard.querySelector("h2");
  const difficultyButtons = difficultyBoard.querySelectorAll(".levelButton");

  // Define estado inicial para o título
  if (difficultyTitle) {
    difficultyTitle.style.opacity = "0";
    difficultyTitle.style.transform = "translateY(-20px)";
    difficultyTitle.style.transition = "all 0.6s ease";
  }

  // Define estado inicial para os botões
  difficultyButtons.forEach((button, index) => {
    button.style.opacity = "0";
    button.style.transform = "translateY(20px) scale(0.8)";
    button.style.transition = "all 0.5s ease";
  });

  // Anima o título primeiro
  setTimeout(() => {
    if (difficultyTitle) {
      difficultyTitle.style.opacity = "1";
      difficultyTitle.style.transform = "translateY(0)";
    }
  }, 100);

  // Anima os botões sequencialmente após o título
  difficultyButtons.forEach((button, index) => {
    setTimeout(() => {
      button.style.opacity = "1";
      button.style.transform = "translateY(0) scale(1)";
    }, 300 + index * 150); // Começa 300ms após o título, com 150ms de delay entre botões
  });
}

export function showGameElements(level) {
  // Define o nível selecionado
  setLevel(level);

  // Obtém o nível selecionado
  const currentLevel = getLevel();
  console.log(`Nível selecionado: ${currentLevel}`);

  // Oculta o board de seleção de nível
  noShowAnimatedDificultyButton();

  setTimeout(() => {
    // Remove a classe hidden e adiciona show para o gameBoard
    showAnimatedGameBoard();

    // Cria as cartas primeiro
    createCardGame(currentLevel);

    // Inicia a animação das cartas simultaneamente com o gameBoard
    showAnimateCards();

    // Gera as imagens aleatórias para o jogo
    randomImages(currentLevel);

    // Adiciona os event listeners às cartas após elas serem criadas
    setTimeout(() => {
      addCardEventListeners();
    }, 200); // Aumentei o tempo para garantir que as cartas estejam criadas

    // Mostra o scoreBoard com um pequeno delay para efeito sequencial
    setTimeout(() => {
      showAnimatedScoreBoard();
    }, 800);
  }, 500); // Espera a animação do botão terminar
}
