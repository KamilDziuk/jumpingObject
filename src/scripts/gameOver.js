export const endOfTheGame = (gameOver) => {
  gameOver = document.createElement("div");
  gameOver.className = "gameOver";
  gameOver.innerText = "Game Over";

  window.innerWidth <= 500
    ? (gameOver.style =
        "  position: absolute; top: 50%; z-index: 9999; color: #000; font-size: 20px; left: 50%; transform: translateX(-50%);")
    : (gameOver.style =
        "  position: absolute; top: 50%; z-index: 9999; color: #000; font-size: 50px; left: 50%; transform: translateX(-50%);");

  document.body.appendChild(gameOver);
  setTimeout(() => {
    window.location.reload();
  }, 3000);

  return gameOver;
};
