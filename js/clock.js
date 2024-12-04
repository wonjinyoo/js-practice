const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  // padstart: if string is not legnth 2, fill with "0" from the start
  const hours = String(date.getHours()).padStart(2, "0");
  const mins = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  //const millisec = String(date.getMilliseconds()).padStart(2, "0");
  clock.innerText = `${hours}:${mins}`;
}

getClock();
// repeat every 1second
setInterval(getClock, 1000);

// just run function 1 time after 1000ms
//setTimeout(getClock, 1000);
