fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=53.55&lon=10&appid=fe9b9d62a21b37d39baab5ed769d8339&units=metric"
).then(function (response) {
  response.json().then(function (result) {
    console.log(result);
    const currentCity = document.querySelector("#currentCity");
    currentCity.innerHTML += `Currently in ${result.name} and the weather is ${result.weather[0].main} `;
  });
});

function getWetterIcon(url) {
  fetch(url)
    .then(function (image) {
      console.log(image);
      const weatherIcon = document.querySelector("#wetterIcon");
      weatherIcon.src = image.url;
    })
    .catch(function (error) {
      alert("Was there something wrong?");
    });
}
getWetterIcon("https://openweathermap.org/img/wn/04d@2x.png");

fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=41.1495&lon=-8.611&appid=fe9b9d62a21b37d39baab5ed769d8339&units=metric"
).then(function (response) {
  response.json().then(function (feature) {
    console.log(feature);
    console.log(feature.name);
    console.log(feature.weather[0].main);
    const featureForCity = document.querySelector("#featureForCity");
    featureForCity.innerHTML += `This is the weather forecast for ${feature.name} is ${feature.weather[0].main} `;
  });
});

function getIcon(url) {
  fetch(url)
    .then(function (image) {
      console.log(image);
      const weatherIcon = document.querySelector("#weatherIcon");
      weatherIcon.src = image.url;
    })

    .catch(function (error) {
      alert("Was there something wrong?");
    });
}
getIcon("https://openweathermap.org/img/wn/01d@2x.png");
