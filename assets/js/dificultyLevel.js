import { attemptsDisplay } from "./elements.js";
import { showLoserCard } from "./cards.js";
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
  easy: 10,
  medium: 12,
  hard: 14,
};

let attempt = 0;

// Função para validar o nível atual e retornar o limite de pontos correspondente
export function validateLevelPoints(dificultyLevel) {
  if (dificultyLevel === dificultyLevel.easy/2) {
    return pointsLimit.easy;
  } else if (dificultyLevel === dificultyLevel.medium/2) {
    return pointsLimit.medium;
  } else if (dificultyLevel === dificultyLevel.hard/2) {
    return pointsLimit.hard;
  }
}

function validateLevel(dificultyLevel) {
  if (dificultyLevel === dificultyLevel.easy) {
    return "easy";
  } else if (dificultyLevel === dificultyLevel.medium) {
    return "medium";
  } else if (dificultyLevel === dificultyLevel.hard) {
    return "hard";
  }
}

export function validateIfYouLose(actualLevel) {
  const level = validateLevel(actualLevel);
  if (attempt > attempts.level) {
    alert("Número máximo de tentativas atingido!");
    showLoserCard();
    resetAttempts();
    resetPoints();
  } else {
    console.log(
    `Tentativas: ${attempt}, Limite de tentativas: ${attempts.level}`
  );
  }
}

export function resetAttempts() {
  attempt = 0;
}

export function addAttempts(value) {
  if (attemptsDisplay) {
    attemptsDisplay.textContent = attempt;
  }
  return attempt += value;
}

export function getAttempts() { 
  return attempt;
}




