import {randomImages, dificultyLevel} from "./index.js";

const gameBoard = document.getElementById("gameBoard");
const scoreBoard = document.getElementById("scoreBoard");
const startButton = document.getElementById("startButton");
const cardGame  = document.querySelectorAll(".cardGame");

startButton.addEventListener("click", () => startGame(startButton));

cardGame.forEach(card => {
  card.addEventListener("click", () => flipCard(card));
});


// Função para iniciar o jogo
export function startGame(buttonClicked) {

  // Adiciona a animação de fade out ao botão
  buttonClicked.classList.add("fadeOut");

  // Após a animação do botão, mostra o gameBoard e scoreBoard
  setTimeout(() => {
    // Oculta completamente o botão
    buttonClicked.style.display = "none";
    showGameBoard();
    // Remove a classe hidden e adiciona show para o gameBoard
    // Inicia a animação das cartas simultaneamente com o gameBoard
    animateCards();
    randomImages(dificultyLevel.medium); // Inicia o jogo com nível médio por padrão

    // Mostra o scoreBoard com um pequeno delay para efeito sequencial
    setTimeout(() => {
      animateBoard();
    }, 800);
  }, 500); // Espera a animação do botão terminar
}


// Função para virar a carta
export function flipCard(card) {
  card.classList.toggle("flipped");
}

function showGameBoard() {
    gameBoard.classList.remove("hidden");
    gameBoard.classList.add("show");
}

function animateBoard() {
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
function animateCards() {
  const cards = document.querySelectorAll(".cardGame");

  cards.forEach((card, index) => {
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
