import { selectedImage } from "./imagens.js";

export const gameBoard = document.getElementById("gameBoard");
export const scoreBoard = document.getElementById("scoreBoard");
export const startButton = document.getElementById("startButton");
export const cardGame = document.querySelectorAll(".cardGame");
export const cardGameImageSelected = document.querySelectorAll(".gameImage");
export const winnerCard = document.getElementById("winnerCard");
export const loserCard = document.getElementById("loserCard");
export const resetButton = document.getElementById("resetButton");
export const attemptsDisplay = document.getElementById("attempts");
export const difficultyDisplay = document.getElementById("difficulty");
export const timerDisplay = document.getElementById("timer");
export const scoreDisplay = document.getElementById("score");


// Função para adicionar event listeners às cartas após o jogo iniciar
export function addCardEventListeners() {
  cardGame.forEach((card) => {
    card.addEventListener("click", () => {
      // Usa a função selectedImage que já gerencia a lógica do jogo
      selectedImage(card);
    });
  });
}

export function showWinnerCard() {
  setTimeout(() => {
    winnerCard.classList.remove("hidden");
  }, 500);
}

export function showLoserCard() {
  setTimeout(() => {
  loserCard.classList.remove("hidden");
  }, 500);
}
