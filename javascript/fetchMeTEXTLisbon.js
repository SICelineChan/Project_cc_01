// function countryList(place) {
//   const capital = document.querySelector("#capital");
//   for (let i = 0; i < place.length; i++) {
//     const output = i + " : " + place[i].capital[0];
//     console.log(place[i].altSpellings[3]);
//     capital.innerHTML += `<p> The flag of portugal is ${place[i].flag}
//     and the capital of Portugal is ${output} </p>`;
//   }
// }
// fetch("https://restcountries.com/v3.1/name/portugal").then(function (response) {
//   response.json().then(function (result) {
//     // console.log(result[0]);
//     countryList(result);
//   });
// });

let someBlah = [
  // { detail: "Arrived and napped at the Airbnb until dinner time!" },
  // {
  //   detail:
  //     "Warm for October and was planning bus trip to a walk. Did a little loop around Funchal",
  // },
  // {
  //   detail:
  //     "The weather was fantastic for walking! Took buses towards Levada dos Balcões, starting at Ribeiro Frio",
  // },
];

const travelBlah = document.querySelector("#travelBlah");
const textBox = document.querySelector("#textBox");
const addTextButton = document.querySelector("#addTextButton");

fetch("/javascript/travelDetail.json").then(function (response) {
  response.json().then(function (result) {
    console.log(result);
    if (someBlah == 0) {
      someBlah = result;
    }
    fillText();
  });
});

function fillText() {
  let textBlah = "";
  for (let i = 0; i < someBlah.length; i++) {
    // console.log(someBlah[i]);
    textBlah += `<p><button data-pos="${i}">❌</button> ${someBlah[i].detail}  </p>`;
  }
  travelBlah.innerHTML = textBlah;
  save();
}

addTextButton.addEventListener("click", function () {
  // alert("You wanna add some blah there");
  // console.log(textBox);
  // console.log(textBox.value);
  const newDetail = {
    detail: textBox.value,
  };
  someBlah.push(newDetail);
  fillText();
  save();
});
function save() {
  const travelDetail = JSON.stringify(someBlah);
  localStorage.setItem("someBlah", travelDetail);
}

function load() {
  const travelDetail = localStorage.getItem("someBlah");
  someBlah = JSON.parse(travelDetail) || [];
}

travelBlah.addEventListener("click", function (event) {
  // alert("blah!");
  if (event.target.tagName !== "BUTTON") {
    return;
  }
  const removeButton = event.target;

  const removeDetail = removeButton.dataset.pos;

  someBlah.splice(removeDetail, 1);
  fillText();
  save();
});

load();
fillText();
