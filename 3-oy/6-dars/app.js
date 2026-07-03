const timeEl = document.querySelector(".time");

console.log(timeEl);

setInterval(() => {
  let naw = new Date();
  let hours = naw.getHours() >= 10 ? naw.getHours() : `0${naw.getHours()}`;
  let min = naw.getMinutes() >= 10 ? naw.getMinutes() : `0${naw.getMinutes()}`;
  let sec = naw.getSeconds() >= 10 ? naw.getSeconds() : `0${naw.getSeconds()}`;
  timeEl.innerHTML = `${hours}:${min}:${sec}`;
}, 1000);
