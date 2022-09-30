let baseInfo = [
  {
    continent: "Asia",
    country: "South Korea",
    city: "Seoul",
    dateOftravel: "August 2015",
  },
  {
    continent: "Asia",
    country: "Vietnam",
    city: "Hanoi",
    dateOftravel: "September 2014",
  },
  {
    continent: "Europe",
    country: "Spain",
    city: "Barcelona",
    dateOftravel: "July 2013",
  },
  {
    continent: "Europe",
    country: "Portugal",
    city: "Funchal",
    dateOftravel: "October 2019",
  },
  {
    continent: "North America",
    country: "Mexico",
    city: "Mexico City",
    dateOftravel: "Feburary 2017",
  },
];
const placeName = document.querySelector("#placeName");

function listInfo(info) {
  let outcome = `<p> ${info.continent} in ${info.country}! The city is ${info.city}, ${info.dateOftravel}! `;
  return outcome;
}

function fillPlaces(travelInfo) {
  for (let i = 0; i < baseInfo.length; i++) {
    let output = listInfo(baseInfo[i]);
    console.log(baseInfo[i]);
    console.log(output);
    // placeName.innerHTML += output;
  }
}
fillPlaces();
