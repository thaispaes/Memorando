import { attemptsDisplay, showLoserCard } from "./elements.js";
import { resetPoints } from "./points.js";

// Definindo níveis de dificuldade
export const dificultyLevel = {
  easy: 8,
  medium: 12,
  hard: 16,
};

// Define o limite de pontos para cada nível de dificuldade
export const pointsLimit = {
  easy: dificultyLevel.easy / 2,
  medium: dificultyLevel.medium / 2,
  hard: dificultyLevel.hard / 2,
};

// Define o número de tentativas para cada nível de dificuldade
export const attempts = {
  easy: 6,
  medium: 10,
  hard: 12,
};

let levelSelected = 0;
let levelType = "";
let attempt = 0;

export function validateIfYouLose(actualLevel) {
  if (attempt == actualLevel) {
    console.log("Número máximo de tentativas atingido!");
    showLoserCard();
    resetPoints();
    resetAttempts();
    resetLevel();
  } else {
    console.log(
    `Tentativas: ${attempt}, Limite de tentativas: ${actualLevel}`
  );
  }
}

export function resetAttempts() {
  attempt = 0;
}

export function addAttempts(value) {
  // Adiciona as tentativas
  attempt += value;

  // Atualiza o display de tentativas
  if (attemptsDisplay) {
    attemptsDisplay.textContent = attempt;
  }
  
}

function getAttempts() { 
  return attempt;
}

export function setLevel(level){
  levelSelected = dificultyLevel[level];
  levelType = level;
  console.log(`Nível selecionado: ${levelSelected}`);
}

export function getLevel() {
  return levelSelected;
}

export function getLevelType() {
  return levelType;
}

export function resetLevel() {
  levelSelected = 0;
  levelType = "";
}


