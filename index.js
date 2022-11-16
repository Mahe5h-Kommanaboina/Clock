setInterval(setTime, 1000);

const hour = document.querySelector("[data-hour-hand]");
const minute = document.querySelector("[data-minute-hand]");
const second = document.querySelector("[data-second-hand]");
console.log(hour, minute, second);
function setTime() {
  const date = new Date();
  const base = date.getSeconds() / 60;
  const minuteBase = (base + date.getMinutes()) / 60;
  const hourBase = (minuteBase + date.getHours()) / 12;
  setRotate(hour, hourBase);
  setRotate(minute, minuteBase);
  setRotate(second, base);
}

function setRotate(element, deg) {
  element.style.setProperty("--rotation", deg * 360);
}
setTime();
