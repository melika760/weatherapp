let date = document.querySelector("#Current-time");
let now = new Date();
let day = now.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let hour = now.getHours();
let Minutes = now.getMinutes();
date.innerHTML = `${days[now.getDay()]} ${hour}:${Minutes} `;
let form = document.querySelector("#form");
function submit(event) {
  event.preventDefault();
  let city = document.querySelector("#City-name");
  let input = document.querySelector("#city-input");
  city.innerHTML = input.value;
  let Apikey = "1e9fb88fe728a434cb6268bdccba077b";
  let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${Apikey}`;
  axios.get(ApiUrl).then(showtemp);
}
form.addEventListener("submit", submit);
function showtemp(response) {
  let temp = response.data.main.temp;
  let temperature = Math.round(temp);
  let currentdegree = document.querySelector("#current-degree");
  currentdegree.innerHTML = temperature;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;
  let humadity = document.querySelector("#humadity");
  humadity.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#wind");
  wind.innerHTML = response.data.wind.speed;
}
function showWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  alert(`current temperature is ${temperature} now`);
}
function Currentsubmit(position) {
  let Apikey = "1e9fb88fe728a434cb6268bdccba077b";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${Apikey}`;
  axios.get(url).then(showWeather);
}
navigator.geolocation.getCurrentPosition(Currentsubmit);
