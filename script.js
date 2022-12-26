let hourHand = document.getElementById('hr');
let minuteHand = document.getElementById('min');
let secondHand = document.getElementById('sec');

const setTime = () => {
  const currentTime = new Date();
  const seconds = currentTime.getSeconds();
  const minutes = currentTime.getMinutes();
  const hours = currentTime.getHours();

  const secondRatio = seconds / 60;
  const minuteRatio = minutes / 60;
  const hourRatio = hours / 12;
  // console.log(hourRatio);

  setRotation(secondHand, secondRatio);
  setRotation(minuteHand, minuteRatio);
  setRotation(hourHand, hourRatio);
};

const setRotation = (element, rotationRatio) => {
  element.style.setProperty('--rotation', rotationRatio * 360);
};

setTime();
setInterval(setTime, 1000);
