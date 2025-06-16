export const randomMonsterSkins = (randomMonster) => {
  randomMonster = Math.floor(Math.random() * 10);
  return `/assets/images/bad_character_${randomMonster}.png`;
};
