import { cardGame, scoreDisplay, showWinnerCard } from "./elements.js";
import { addAttempts , validateIfYouLose, pointsLimit, attempts, getLevelType } from "./dificultyLevel.js";


// Variável para armazenar os pontos do jogador 
let points = 0;

// Função para obter os pontos atuais exibidos no placar
export function getPointsDisplay() {
  return scoreDisplay.textContent;
}

// Função para obter os pontos atuais
export function getPoints() {
  return points;  
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

// Função para adicionar pontos ao jogador
export function addPoints(value) {
  // Adiciona os pontos
  points += value;
  // Atualiza o display de pontos
  if (scoreDisplay) {
    scoreDisplay.textContent = points;
  }
  
  
}

// Verifica se o jogador venceu
export function validateIfYouWin(level) {
  if (getPointsDisplay() == level) {
    showWinnerCard();
    // Desabilita todas as cartas para evitar mais interações e finaliza o jogo
    resetPoints();
  } else {
    console.log(
    `Ponto atual: ${getPointsDisplay()}, Limite de pontos: ${level}`
  );
  }
}


// Função para validar se as cartas selecionadas são iguais
export function validatePoints(firstCard, secondCard) {

  // Pega as imagens dentro das cartas
  const firstImage = firstCard.querySelector(".card-game-icon");
  const secondImage = secondCard.querySelector(".card-game-icon");

  // Verifica se as imagens existem
  if (!firstImage || !secondImage) {
    console.error("Imagens não encontradas nas cartas");
    return;
  } else {
    console.log("Imagens encontradas nas cartas");
  }

  // Compara os atributos 'alt' das imagens para verificar se são iguais
  const idImageSelected1 = firstImage.getAttribute("alt");
  const idImageSelected2 = secondImage.getAttribute("alt");
  const currentLevelType = getLevelType();

  console.log(`level atual: ${currentLevelType}`);

  // Se as imagens forem iguais, adiciona pontos
  if (idImageSelected1 === idImageSelected2) {
    // Cartas combinam - adiciona pontos
    addPoints(1);
    // Remove os event listeners das cartas que combinaram
    firstCard.style.pointerEvents = "none";
    secondCard.style.pointerEvents = "none";
    
  } else {
    // Adiciona a tentativa
    addAttempts(1);

    // Cartas não combinam - vira de volta após um delay
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
    }, 500); // Espera 500 milissegundos antes de virar de volta
  }

  // Verifica se o jogador atingiu o limite de pontos para vencer ou o limite de tentativas
  validateIfYouWin(pointsLimit[currentLevelType]);
  validateIfYouLose(attempts[currentLevelType]);
}
