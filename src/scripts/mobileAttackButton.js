export const mobileAttackButton = (swordButton) => {
  swordButton = document.createElement("img");
  swordButton.className = "swordButton";
  swordButton.src = `/assets/images/sword.webp`;
  document.body.appendChild(swordButton);

  return swordButton;
};
