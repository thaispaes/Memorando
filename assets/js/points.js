let points = 0;

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

  console.log(`Comparando: "${idImageSelected1}" vs "${idImageSelected2}"`);

  if (idImageSelected1 === idImageSelected2) {
    // Cartas combinam - adiciona pontos e mantém viradas
    addPoints(1);
    console.log(
      `✅ Match! Imagem 1: ${idImageSelected1}, Imagem 2: ${idImageSelected2}, Pontos: ${getPoints()}`
    );

    // Remove os event listeners das cartas que combinaram
    firstCard.style.pointerEvents = "none";
    secondCard.style.pointerEvents = "none";
  } else {
    // Cartas não combinam - vira de volta após um delay
    console.log(`❌ Não combinam: ${idImageSelected1} ≠ ${idImageSelected2}`);

    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
    }, 1000); // Espera 1 segundo antes de virar de volta
  }
}
