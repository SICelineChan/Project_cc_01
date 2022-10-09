function countryList(place) {
  const capital = document.querySelector("#capital");
  for (let i = 0; i < place.length; i++) {
    const output = " : " + place[i].capital[0];

    let borders = " : " + place[i].borders + " ";
    console.log(borders);
    // in DOM
    capital.innerHTML += `<p> The flag of ${place[i].altSpellings[3]} is ${place[i].flag} 
      and the capital is ${output}.
      The official currency is ${place[i].currencies.MXN.name} .
      The official language/s is/are ${place[i].languages.spa} . 
      The country is bordering with ${place[i].borders[i].length} countries,
      which are ${borders} </p>`;
  }
}
getflag("https://flagcdn.com/w320/mx.png");

fetch("https://restcountries.com/v3.1/name/mexico").then(function (response) {
  response
    .json()
    .then(function (result) {
      console.log(result[0]);
      console.log(result[0].maps.openStreetMaps);

      countryList(result);
    })
    .catch(function (error) {
      alert("API has something wrong");
    });
});

function getflag(url) {
  fetch(url)
    .then(function (flag) {
      console.log(flag);
      const flagOfMex = document.querySelector("#flagOfMex");
      flagOfMex.src = flag.url;
    })

    .catch(function (error) {
      alert("Flag got something wrong?");
    });
}
getflag("https://flagcdn.com/w320/mx.png");

// fetch(
//   "https://api.openweathermap.org/data/2.5/weather?lat=19.25&lon=-99.1667&appid=fe9b9d62a21b37d39baab5ed769d8339&units=metric"
// ).then(function (response) {
//   response.json().then(function (weather) {
//     console.log(weather);
//   });
// });

window.initMap = initMap;
function initMap() {
  new google.maps.Map(document.getElementById("mapOfMexico"), {
    // mapId: "8e0a97af9386fef",
    center: { lat: 19.432608, lng: -99.133208 },
    zoom: 8,
  });
}

window.initMap = initMap;
