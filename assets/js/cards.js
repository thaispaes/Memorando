export function showWinnerCard() {
  setTimeout(() => {
    winnerCard.classList.remove("hidden");
  }, 500);
}

export function showLoserCard() {
  setTimeout(() => {
  loserCard.classList.remove("hidden");
  }, 500);
}
