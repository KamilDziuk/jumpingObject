let pointInterval;
let levelInterval;
export const pointsCounter = (pointElement, point = 0) => {
  pointElement = document.createElement("div");
  pointElement.className = "pointElement";
  pointElement.style =
    "position: absolute; top: 5px; z-index: 9999; color: #000; font-size: 20px; left:20px; transform: translateX(-20%)  border-radius: 5%; background-color: #ffffff37;  backdrop-filter: blur(5px); padding: 0.2%;";
  document.body.appendChild(pointElement);
  pointElement.innerHTML = `Point: ${point}`;

  pointInterval = setInterval(() => {
    pointElement.innerHTML = `Point: ${point++}`;
  }, 1000);
  return pointElement;
};

export const levelCounter = (levelElement, level = 0) => {
  levelElement = document.createElement("div");
  levelElement.className = "levelElement";
  levelElement.style =
    "position: absolute; top: 35px; z-index: 9999; color: #000; font-size: 20px; left:20px; transform: translateX(-20%)  border-radius: 5%; background-color: #ffffff37;  backdrop-filter: blur(5px); padding: 0.2%;";
  document.body.appendChild(levelElement);
  levelElement.innerHTML = `Level: ${level}`;
  levelInterval = setInterval(() => {
    levelElement.innerHTML = `Level: ${level++}`;
  }, 5000);
   return levelElement;
};

export const stopPointsCounter = () => {
  clearInterval(pointInterval);
};
export const stopLevelCounter = () => {
  clearInterval(levelInterval);
};
