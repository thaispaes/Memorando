import { selectRandomImages } from "./imagens.js";

const cardGameIcons = Array.from(document.getElementsByClassName('card-game-icon'));

// cardGameIcons.forEach(card => {
//   card.addEventListener("click", () => randomImages(dificultyLevel.medium));
// });

// Definindo níveis de dificuldade
export let dificultyLevel = {
    easy: 6,
    medium: 8,
    hard: 12,
};

export function randomImages(dificultyLevel) {
    const imagesContent = selectRandomImages(dificultyLevel);

    console.log(`imagesContent: ${imagesContent.map(img => img.src)}`);

    const gameImageCard = document.getElementsByClassName('card-game-icon');

    for (let i = 0; i < gameImageCard.length; i++) {
        gameImageCard[i].src = imagesContent[i].src;
        console.log(`gameImageCard[${i}]: ${gameImageCard[i]}`);
    }

    

}
