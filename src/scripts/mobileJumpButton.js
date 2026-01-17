export const mobileJumpButton = (jumpButton) => {
  jumpButton = document.createElement("img");
  jumpButton.className = "jumpButton";
  jumpButton.src = `/assets/images/jump_good_character.webp`;
  document.body.appendChild(jumpButton);

  return jumpButton;
};
