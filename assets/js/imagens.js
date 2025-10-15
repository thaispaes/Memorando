import { dificultyLevel } from "./dificultyLevel.js";
import { validatePoints } from "./points.js";

// Array de Objetos com cada imagem do jogo e seus atributos
export const IMAGES = [
  { id: 0, src: "./assets/img/gameIcons/image1.png", alt: "Image 1" },
  { id: 1, src: "./assets/img/gameIcons/image2.png", alt: "Image 2" },
  { id: 2, src: "./assets/img/gameIcons/image3.png", alt: "Image 3" },
  { id: 3, src: "./assets/img/gameIcons/image4.png", alt: "Image 4" },
  { id: 4, src: "./assets/img/gameIcons/image5.png", alt: "Image 5" },
  { id: 5, src: "./assets/img/gameIcons/image6.png", alt: "Image 6" },
  { id: 6, src: "./assets/img/gameIcons/image7.png", alt: "Image 7" },
  { id: 7, src: "./assets/img/gameIcons/image8.png", alt: "Image 8" },
  { id: 8, src: "./assets/img/gameIcons/image9.png", alt: "Image 9" },
  { id: 9, src: "./assets/img/gameIcons/image10.png", alt: "Image 10" },
  { id: 10, src: "./assets/img/gameIcons/image11.png", alt: "Image 11" },
  { id: 11, src: "./assets/img/gameIcons/image12.png", alt: "Image 12" },
  { id: 12, src: "./assets/img/gameIcons/image13.png", alt: "Image 13" },
  { id: 13, src: "./assets/img/gameIcons/image14.png", alt: "Image 14" },
  { id: 14, src: "./assets/img/gameIcons/image15.png", alt: "Image 15" },
  { id: 15, src: "./assets/img/gameIcons/image16.png", alt: "Image 16" },
  { id: 16, src: "./assets/img/gameIcons/image17.png", alt: "Image 17" },
  { id: 17, src: "./assets/img/gameIcons/image18.png", alt: "Image 18" },
  { id: 18, src: "./assets/img/gameIcons/image19.png", alt: "Image 19" },
  { id: 19, src: "./assets/img/gameIcons/image20.png", alt: "Image 20" },
  { id: 20, src: "./assets/img/gameIcons/image21.png", alt: "Image 21" },
  { id: 21, src: "./assets/img/gameIcons/image22.png", alt: "Image 22" },
  { id: 22, src: "./assets/img/gameIcons/image23.png", alt: "Image 23" },
  { id: 23, src: "./assets/img/gameIcons/image24.png", alt: "Image 24" },
  { id: 24, src: "./assets/img/gameIcons/image25.png", alt: "Image 25" },
  { id: 25, src: "./assets/img/gameIcons/image26.png", alt: "Image 26" },
  { id: 26, src: "./assets/img/gameIcons/image27.png", alt: "Image 27" },
  { id: 27, src: "./assets/img/gameIcons/image28.png", alt: "Image 28" },
  { id: 28, src: "./assets/img/gameIcons/image29.png", alt: "Image 29" },
  { id: 29, src: "./assets/img/gameIcons/image30.png", alt: "Image 30" },
  { id: 30, src: "./assets/img/gameIcons/image31.png", alt: "Image 31" },
  { id: 31, src: "./assets/img/gameIcons/image32.png", alt: "Image 32" },
  { id: 32, src: "./assets/img/gameIcons/image33.png", alt: "Image 33" },
  { id: 33, src: "./assets/img/gameIcons/image34.png", alt: "Image 34" },
];

let firstCardSelected = null;
let secondCardSelected = null;
let isProcessing = false; // Flag para evitar cliques durante processamento

// Função para gerar números aleatórios sem repetição
function getRandomNumber(quantityNumbers) {
  var randomNumbers = [];
  while (randomNumbers.length < quantityNumbers) {
    var randomNumber = Math.floor(Math.random() * (IMAGES.length - 1));
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
}

// Função para selecionar imagens aleatórias sem repetição
function selectRandomImages(numPairs) {
  var randomIndexes = getRandomNumber(numPairs);
  return randomIndexes.map(function (index) {
    return IMAGES[index];
  });
}

function suffleImages(images) {
  const shuffled = [...images];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomNumber = Math.floor(Math.random() * shuffled.length);
    [shuffled[i], shuffled[randomNumber]] = [
      shuffled[randomNumber],
      shuffled[i],
    ];
  }
  return shuffled;
}

export function randomImages(dificultyLevel) {
  const imagesContent = selectRandomImages(dificultyLevel);
  const gameImageCard = document.getElementsByClassName("card-game-icon");
  const suffledImages = suffleImages(imagesContent);

  for (let i = 0; i < gameImageCard.length; i++) {
    gameImageCard[i].src = suffledImages[i].src;
    gameImageCard[i].alt = suffledImages[i].alt;
  }
}

export function selectedImage(cardElement) {
  // Evita cliques durante processamento ou em cartas já viradas
  if (isProcessing || cardElement.classList.contains("flipped")) {
    return;
  }

  // Vira a carta
  cardElement.classList.add("flipped");

  if (firstCardSelected === null) {
    // Primeira carta selecionada
    firstCardSelected = cardElement;
    const firstImage = firstCardSelected.querySelector(".card-game-icon");
    
  } else if (secondCardSelected === null && cardElement !== firstCardSelected) {
    // Segunda carta selecionada (diferente da primeira)
    secondCardSelected = cardElement;
    const secondImage = secondCardSelected.querySelector(".card-game-icon");
    

    // Inicia processamento
    isProcessing = true;

    // Valida se as cartas combinam
    validatePoints(firstCardSelected, secondCardSelected);

    // Reset após validação
    setTimeout(() => {
      firstCardSelected = null;
      secondCardSelected = null;
      isProcessing = false;
    }, 1200); // Espera um pouco mais que o delay de virar as cartas
  }
}
