let Ramadan = new Date("12 April, 2021 24:00:00");

let dayEle = document.getElementById("day");
let hourEle = document.getElementById("hour");
let minEle = document.getElementById("min");
let secEle = document.getElementById("sec");

setInterval(calculateTime, 1000);

function calculateTime() {
  let now = new Date();
  let totalSeconds = (Ramadan - now) / 1000;
  let days = Math.floor(totalSeconds / 3600 / 24);
  let hours = Math.floor(totalSeconds / 3600) % 24;
  let mins = Math.floor(totalSeconds / 60) % 60;
  let secs = Math.floor(totalSeconds) % 60;

  render(days, hours, mins, secs);
}

function render(day, hour, min, sec) {
  dayEle.innerText = day;
  hourEle.innerText = hour;
  minEle.innerText = min;
  secEle.innerText = sec;
}
