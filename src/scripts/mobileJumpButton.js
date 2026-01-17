export const mobileJumpButton = (jumpButton) => {
  jumpButton = document.createElement("img");
  jumpButton.className = "jumpButton";
  jumpButton.src = `/assets/images/good_character.png`;
  document.body.appendChild(jumpButton);

  return jumpButton;
};
