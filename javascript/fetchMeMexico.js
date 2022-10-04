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

fetch("https://restcountries.com/v3.1/name/mexico").then(function (response) {
  response.json().then(function (result) {
    console.log(result[0]);
    countryList(result);
  });
});
