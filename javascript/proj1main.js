let baseInfo = [
  // {
  //   continent: "Asia",
  //   country: "South Korea",
  //   city: "Seoul",
  //   dateOftravel: "12 August 2015",
  // },
  // {
  //   continent: "Asia",
  //   country: "Vietnam",
  //   city: "Hanoi",
  //   dateOftravel: "8 September 2014",
  // },
  // {
  //   continent: "Europe",
  //   country: "Norway",
  //   city: "Bergen",
  //   dateOftravel: "15 April 2015",
  // },
  // {
  //   continent: "Europe",
  //   country: "Portugal",
  //   city: "Funchal",
  //   dateOftravel: "6 October 2019",
  // },
  // {
  //   continent: "North America",
  //   country: "Mexico",
  //   city: "Mexico City",
  //   dateOftravel: "28 Feburary 2017",
  // },
];
const placeName = document.querySelector("#placeName");
const continentAdd = document.querySelector("#continentAdd");
const countryAdd = document.querySelector("#countryAdd");
const cityAdd = document.querySelector("#cityAdd");
const dateOftravelAdd = document.querySelector('input[type="date"]');
const buttonAdd = document.querySelector("#buttonAdd");
// const buttonPush = document.querySelector("#buttonPush");

fetch("/javascript/baseInfo.json").then(function (response) {
  response.json().then(function (mybaseInfo) {
    console.log(mybaseInfo);
    fillPlaces(mybaseInfo);
  });
});

function fillPlaces() {
  let places = "";
  for (let i = 0; i < baseInfo.length; i++) {
    const { continent, country, city, dateOftravel } = baseInfo[i];
    places += `<p> ${continent}, ${country}, ${city}, ${dateOftravel} <button data-pos="${i}">🚮</button></p>`;
  }
  placeName.innerHTML = places;
}

function save() {
  const stringBaseInfo = JSON.stringify(baseInfo);
  localStorage.setItem("baseInfo", stringBaseInfo);
}

function loadinfo() {
  const stringBaseInfo = localStorage.getItem("baseInfo");
  baseInfo = JSON.parse(stringBaseInfo);
}

buttonAdd.addEventListener("click", function () {
  // console.log(dateOftravelAdd);
  // console.log(dateOftravelAdd.value);
  // console.log(countryAdd);
  const newTravelInfo = {
    continent: continentAdd.value,
    country: countryAdd.value,
    city: cityAdd.value,
    dateOftravel: dateOftravelAdd.value,
  };
  baseInfo.push(newTravelInfo);
  fillPlaces();
  save();
});

placeName.addEventListener("click", function (event) {
  // alert("show me click");

  if (event.target.tagName !== "BUTTON") {
    return;
  }
  const binButton = event.target;
  // console.log(binButton);
  const binPlace = binButton.dataset.pos;
  // console.log(binPlace);
  baseInfo.splice(binPlace, 1);
  fillPlaces();
  save();
});
loadinfo();
fillPlaces();
