function weatherList(someCity) {
  const weatherCity = document.querySelector("#weatherCity");
  for (let y = 0; y < someCity.length; y++) {
    console.log(someCity);
    // const outputWeather = place.list[i].weather[0].description;
    // const forecast = place.list[i].dt_txt;
    // weatherCity.innerHTML += `<p> The weather in ${outputCityName} </p>`;
  }
}

fetch(
  "https://api.openweathermap.org/data/2.5/forecast?lat=38.7167&lon=-9.1333&appid=fe9b9d62a21b37d39baab5ed769d8339&units=metric"
).then(function (response) {
  response.json().then(function (result) {
    console.log(result);
    //console.log(result.city.name);
    // console.log(result.list[10].weather[0].description);
    // console.log(result.list[10].dt_txt);
    weatherList(result);
    //document.write(result.city.name);
    // const weatherCity = document.querySelector("#weatherCity");
    // const outputCityName = someCity.city.name;
    // weatherCity.innerHTML += `<p> The weather in ${outputCityName} </p>`;
  });
});
