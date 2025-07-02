
import { createdMainCharacter, jumpEffect } from "./theMainCharacter.js";
import { randomMonsterSkins } from "./randomMonsterSkins.js";
import { endOfTheGame } from "./gameOver.js";
import { mobileAttackButton } from "./mobileAttackButton.js";
import {
  pointsCounter,
  levelCounter,
  stopPointsCounter,
  stopLevelCounter,
} from "./counter.js";

// Start game button
const gameStartButton = document.querySelector(".gameStartButton");

gameStartButton.addEventListener("click", async () => {

 const { gameSounds } = await import("./sounds.js");
  
  // Counter points and level
  const levelElement = levelCounter();
  const pointElement = pointsCounter();

  // Game sounds
  let sounds = gameSounds();
  sounds.backgroundMusic.loop = true;
  sounds.backgroundMusic.play();

  // Created main character
  const theMainCharacter = createdMainCharacter();

  gameStartButton.style.display = "none";

  //Creating bad character
  let creatingBadCharacter = (badCharacter) => {
    //Evil character appearance randomization
    const monsterSkins = randomMonsterSkins();

    badCharacter = document.createElement("img");
    badCharacter.className = `badCharacter`;
    badCharacter.style =
      "right: 0%; bottom: 0px; position: fixed; width: 50px; height: 50px; z-index: 10;";
    badCharacter.src = monsterSkins;
    document.body.appendChild(badCharacter);

    //Evil character movement effect
    const badStationMovement = (moveCounter) => {
      moveCounter = parseInt(badCharacter.style.right);

      window.innerWidth <= 500
        ? (badCharacter.style.right = `${moveCounter + 4}%`)
        : (badCharacter.style.right = `${moveCounter + 1}%`);
    };

    badStationMovement();

    // Game behavior after losing
    const afterKillingPlayer = () => {
      theMainCharacter.src = `/assets/images/good_character_attack.gif`;

      sounds.swordSound.play();

      setTimeout(() => {
        theMainCharacter.src = `/assets/images/good_character.gif`;
      }, 330);

      if (
        badCharacter.offsetLeft <= "20" &&
        theMainCharacter.style.bottom == "-20px"
      ) {
        badCharacter.style.right = `-250%`;
        badCharacter.style.transition = `7s`;
        badCharacter.style.bottom = `5%`;
        badCharacter.style.rotate = `222deg`;
        setTimeout(() => {
          badCharacter.src = `/assets/images/smokeAfterTheMonster.gif`;
          badCharacter.style.transition = `1.5s`;
          badCharacter.style.rotate = `360deg`;
        }, 800);
        setTimeout(() => {
          sounds.monsterKillSound.play();
          badCharacter.remove();
        }, 2000);
      } else {
        setTimeout(() => {
        sounds.monsterKillSound.pause();
        }, 2000);
      }
    };

    setInterval(badStationMovement, 30);
    if (window.innerWidth <= 500) {
      // Showing a clickable sword icon on mobile devices (main character attack)
      let clickmobileAttackButton = mobileAttackButton();

      clickmobileAttackButton.addEventListener("click", () => {
        afterKillingPlayer();
      });
    }
    document.addEventListener("keyup", (event) => {
      // Sword attack by pressing the D button on the keyboard
      if (event.code == "KeyD") {
        afterKillingPlayer();
      }

      //The main character jumps after clicking the W button on the keyboard
      if (event.code == "KeyW") {
        sounds.jumpSound.play();
        theMainCharacter.style.bottom = "100px";
        jumpEffect();
      }
    });

    // Winning losing player
    const playerDeathDetection = () => {
      if (
        badCharacter.offsetLeft <= "-26" &&
        theMainCharacter.style.bottom == "-20px"
      ) {
        badCharacter.style.right = `-99990%`;

        sounds.playerKillSound.play();

        //Stop points nad level counter
        stopPointsCounter();
        stopLevelCounter();

        // Game restart
        endOfTheGame();

        badCharacter.style =
          "right: 0%; bottom: 0px; position: fixed; width: 50px; height: 50px; z-index: 10;";
        theMainCharacter.style = "left:-100px; transition:2s; bottom:5%;";
        theMainCharacter.src = `/assets/images/smokeAfterTheMonster.gif`;
      }

      if (badCharacter.style.right == "100%") {
        badCharacter.style.right = "0%";
      }
    };

    //Checking the fulfillment of the player's death conditions at a specified interval
    setInterval(playerDeathDetection, 30);
  };

  creatingBadCharacter();

  //Creating a new evil character at a specific time interval
  setInterval(creatingBadCharacter, 5000);

  // Jump effect when clicking on the main character
  theMainCharacter.addEventListener("click", () => {
    theMainCharacter.style.bottom = "100px";
    sounds.jumpSound.play();
    // Player jump effect
    jumpEffect();
  });
});
