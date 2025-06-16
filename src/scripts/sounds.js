export const gameSounds = (sounds) => {
  sounds = {
    playerKillSound: new Audio("/assets/sound/playerDeathSound.mp3"),
    jumpSound: new Audio("/assets/sound/jumpSound.mp3"),
    swordSound: new Audio("/assets/sound/drawSwordSound.mp3"),
    backgroundMusic: new Audio("/assets/sound/mainMusic.mp3"),
    monsterKillSound: new Audio("/assets/sound/killingMonsterSound.mp3"),
  };
  return sounds;
};
