function cityForecast(somePlace) {
  const weather = document.querySelector("#weather");
  for (let i = 0; i < somePlace.length - 30; i++) {
    console.log(somePlace[i].weather[0].description);
    console.log(somePlace[i].dt_txt);
    const wetterForecast = i + " : " + somePlace[i].weather[0].description;
    weather.innerHTML += `<p> This is the weather forecast for a City and these are the ${wetterForecast}
    at these time and dates ${somePlace[i].dt_txt}  </p>`;
  }
}
const forecastForCity = document.querySelector("#forecastForCity");
fetch(
  "https://api.openweathermap.org/data/2.5/forecast?lat=38.7167&lon=-9.1333&appid=fe9b9d62a21b37d39baab5ed769d8339&units=metric"
).then(function (response) {
  response.json().then(function (forecast) {
    console.log(forecast);
    const forecastForCity = document.querySelector("#forecastForCity");
    forecastForCity.innerHTML += `This is the weather forecast for ${forecast.city.name} `;
    console.log(forecast.city.name);
    console.log(forecast.list.length);
    let predictList = forecast.list;

    cityForecast(predictList);
  });
});
