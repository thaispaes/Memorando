import { gameBoard, scoreBoard } from "./elements.js";

// Função para virar a carta
export function flipCard(card) {
  card.classList.toggle("flipped");
}

export function showAnimatedGameBoard() {
    gameBoard.classList.remove("hidden");
    gameBoard.classList.add("show");
}

export function showAnimatedScoreBoard() {
  if (scoreBoard) {
        scoreBoard.style.display = "flex";
        scoreBoard.style.opacity = "0";
        scoreBoard.style.transform = "translateY(20px)";
        scoreBoard.style.transition = "all 0.6s ease";

        // Anima a entrada do scoreBoard
        setTimeout(() => {
          scoreBoard.style.opacity = "1";
          scoreBoard.style.transform = "translateY(0)";
        }, 50);
      }
}

// Adiciona animação sequencial para as cartas
export function showAnimateCards() {
  const cards = document.querySelectorAll(".cardGame");

  cards.forEach((card, index) => {
    // Define estado inicial das cartas
    card.style.opacity = "0";
    card.style.transform = "translateY(20px) scale(0.8)";
    card.style.transition = "all 0.5s ease";

    // Anima cada carta com delay progressivo menor para melhor sincronia
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0) scale(1)";
    }, index * 60); // Delay reduzido para 60ms
  });
}
