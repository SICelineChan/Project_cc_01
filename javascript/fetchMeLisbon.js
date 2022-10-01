function countryList(place) {
  const capital = document.querySelector("#capital");
  for (let i = 0; i < place.length; i++) {
    const output = i + " : " + place[i].capital[0];
    capital.innerHTML += `<p> The flag of portugal is ${place[i].flag} 
    and the capital of Portugal is ${output} </p>`;
  }
}

fetch("https://restcountries.com/v3.1/name/portugal").then(function (response) {
  response.json().then(function (result) {
    console.log(result);
    countryList(result);
  });
});
