import { cardGame, winnerCard } from "./elements.js";
import { dificultyLevel } from "./dificultyLevel.js";

let points = 0;

const pointsLimit = {
  easy: dificultyLevel.easy / 2,
  medium: dificultyLevel.medium / 2,
  hard: dificultyLevel.hard / 2,
};

export function getPoints() {
  return points;
}

export function addPoints(value) {
  points += value;
  // Atualiza o display de pontos na tela
  const scoreDisplay = document.getElementById("score");
  if (scoreDisplay) {
    scoreDisplay.textContent = points;
  }
}

// Reseta os pontos e verifica se o jogador venceu
export function resetPoints(level) {
  const scoreDisplay = document.getElementById("score");

  console.log(
    `Ponto atual: ${scoreDisplay.textContent}, Limite de pontos: ${level}`
  );

  if (scoreDisplay.textContent == level) {
    showWinnerCard();
    setTimeout(() => {
      points = 0;
       scoreDisplay.textContent = 0;
    }, 2000); // Reseta os pontos após 2 segundos
    
    // Desabilita todas as cartas para evitar mais interações
    cardGame.forEach((card) => {
      card.style.pointerEvents = "none";
    });
  }
}

export function showWinnerCard() {
  setTimeout(() => {
    winnerCard.classList.remove("hidden");
  }, 500);
  
}

export function showLoserCard() {
  loserCard.classList.remove("hidden");
}

export function validatePoints(firstCard, secondCard) {
  // Pega as imagens dentro das cartas
  const firstImage = firstCard.querySelector(".card-game-icon");
  const secondImage = secondCard.querySelector(".card-game-icon");

  if (!firstImage || !secondImage) {
    console.error("Imagens não encontradas nas cartas");
    return;
  }

  const idImageSelected1 = firstImage.getAttribute("alt");
  const idImageSelected2 = secondImage.getAttribute("alt");

  if (idImageSelected1 === idImageSelected2) {
    // Cartas combinam - adiciona pontos e mantém viradas
    addPoints(1);

    // Remove os event listeners das cartas que combinaram
    firstCard.style.pointerEvents = "none";
    secondCard.style.pointerEvents = "none";
  } else {
    // Cartas não combinam - vira de volta após um delay
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
    }, 500); // Espera 500 milissegundos antes de virar de volta
  }

  // Verifica se o jogador atingiu o limite de pontos para vencer
  resetPoints(pointsLimit.easy);
}
