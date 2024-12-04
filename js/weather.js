// https://api.openweathermap.org/data/2.5/weather?lat=37.7225216&lon=126.7499008&appid=08d6abb17fc0a623750b1e826f2b4f79

const API_KEY = "08d6abb17fc0a623750b1e826f2b4f79";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); //url request
}

function onGeoError() {
  alert("Can't find you. Location unavailable!");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
