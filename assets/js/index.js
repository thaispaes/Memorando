import { selectRandomImages } from "./imagens.js";

// Definindo níveis de dificuldade
export let dificultyLevel = {
  easy: 6,
  medium: 8,
  hard: 12,
};

function suffleImages(images) {
    const shuffled = [...images];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const randomNumber = Math.floor(Math.random() * (shuffled.length));
        [shuffled[i], shuffled[randomNumber]] = [shuffled[randomNumber], shuffled[i]];
    }
    return shuffled;
}

export function randomImages(dificultyLevel) {
  const imagesContent = selectRandomImages(dificultyLevel);
  const gameImageCard = document.getElementsByClassName("card-game-icon");
  const suffledImages = suffleImages(imagesContent);

  for (let i = 0; i < gameImageCard.length; i++) {
    gameImageCard[i].src = suffledImages[i].src;
  }
}
