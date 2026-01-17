let theMainCharacter;
export const createdMainCharacter = () => {
  theMainCharacter = document.createElement("img");
  theMainCharacter.className = "theMainCharacter";
  theMainCharacter.style = "left:5px; bottom:-20px;";
  theMainCharacter.src = `/assets/images/good_character.gif`;
  document.body.appendChild(theMainCharacter);

  return theMainCharacter;
};

export const jumpEffect = () => {
  if (window.innerWidth > 500) {
    setTimeout(() => {
      theMainCharacter.style.bottom = "-20px";
    }, 300);
  } else if (window.innerWidth <= 500) {
    setTimeout(() => {
      theMainCharacter.style.bottom = "-20px";
    }, 600);
  }
};
