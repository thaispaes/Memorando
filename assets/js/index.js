import { randomImages } from "./imagens.js";
import { cardGame, startButton, flipCard, showAnimatedGameBoard, showAnimatedScoreBoard, showAnimateCards } from "./animations.js";
import { dificultyLevel } from "./dificultyLevel.js";

startButton.addEventListener("click", () => startGame(startButton));

cardGame.forEach(card => {
  card.addEventListener("click", () => flipCard(card));
});

// Função para iniciar o jogo
function startGame(buttonClicked) {

  // Adiciona a animação de fade out ao botão
  buttonClicked.classList.add("fadeOut");
  
  // Após a animação do botão, mostra o gameBoard e scoreBoard
  setTimeout(() => {
    // Oculta completamente o botão
    buttonClicked.style.display = "none";
    // Remove a classe hidden e adiciona show para o gameBoard
    showAnimatedGameBoard();
    
    // Inicia a animação das cartas simultaneamente com o gameBoard
    showAnimateCards();

    randomImages(dificultyLevel.medium); // Inicia o jogo com nível médio por padrão

    // Mostra o scoreBoard com um pequeno delay para efeito sequencial
    setTimeout(() => {
      showAnimatedScoreBoard();
    }, 800);
  }, 500); // Espera a animação do botão terminar
}
