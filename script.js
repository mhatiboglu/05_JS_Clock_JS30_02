//Second hand DOM
const secondHand = document.querySelector(".second-hand");
//Minute hand DOM
const minsHand = document.querySelector(".min-hand");
//Hour hand DOM
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  //We added 90 because of we declared as ' transform: rotate(90deg)' in css file
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
//Every 1000 miliseconds (1 second) we call setDate function
setInterval(setDate, 1000);

setDate();
