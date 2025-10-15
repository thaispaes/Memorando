import { cardGame } from "./elements.js";
import { addAttempts , validateIfYouLose, pointsLimit } from "./dificultyLevel.js";
import { showWinnerCard } from "./cards.js";

// Variável para armazenar os pontos do jogador 
let points = 0;


export function getPoints() {
  return points;
}

export function addPoints(value) {
  // Atualiza o display de pontos
  const scoreDisplay = document.getElementById("score");
  if (scoreDisplay) {
    scoreDisplay.textContent = points;
  }
  // Adiciona os pontos
  return points += value;
  
}

// Verifica se o jogador venceu
export function validateIfYouWin(level) {
  const scoreDisplay = document.getElementById("score");
  console.log(
    `Ponto atual: ${scoreDisplay.textContent}, Limite de pontos: ${level}`
  );

  if (scoreDisplay.textContent == level) {
    showWinnerCard();
    // Desabilita todas as cartas para evitar mais interações e finaliza o jogo
    resetPoints();
  }
}

// Reseta os pontos do jogador e desabilita as cartas
export function resetPoints() {
  setTimeout(() => {
      points = 0;
       scoreDisplay.textContent = 0;
    }, 2000); // Reseta os pontos após 2 segundos
    
    // Desabilita todas as cartas para evitar mais interações
    cardGame.forEach((card) => {
      card.style.pointerEvents = "none";
    });
}

// Função para validar se as cartas selecionadas são iguais
export function validatePoints(firstCard, secondCard, level) {
  // Pega as imagens dentro das cartas
  const firstImage = firstCard.querySelector(".card-game-icon");
  const secondImage = secondCard.querySelector(".card-game-icon");

  // Verifica se as imagens existem
  if (!firstImage || !secondImage) {
    console.error("Imagens não encontradas nas cartas");
    return;
  }

  // Compara os atributos 'alt' das imagens para verificar se são iguais
  const idImageSelected1 = firstImage.getAttribute("alt");
  const idImageSelected2 = secondImage.getAttribute("alt");

  // Se as imagens forem iguais, adiciona pontos
  if (idImageSelected1 === idImageSelected2) {
    // Cartas combinam - adiciona pontos e mantém viradas
    addPoints(1);

    // Atualiza o display de tentativas e tentativas
    addAttempts(1);

    // Remove os event listeners das cartas que combinaram
    firstCard.style.pointerEvents = "none";
    secondCard.style.pointerEvents = "none";
  } else {
    // Atualiza o display de tentativas 
    addAttempts(1);

    // Cartas não combinam - vira de volta após um delay
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
    }, 500); // Espera 500 milissegundos antes de virar de volta
  }

  // Verifica se o jogador atingiu o limite de pontos para vencer ou o limite de tentativas
  validateIfYouWin(pointsLimit[level]);
  validateIfYouLose(level);
}
