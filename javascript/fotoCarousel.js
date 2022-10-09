const randomPicture = document.querySelector("#randomPicture");
const forwardButton = document.querySelector("#forwardButton");
const backButton = document.querySelector("#backButton");

let dog = "url(/Images/dog.png)";
let bunny = "url(/Images/bunnyKor.png)";
let indo = "url(/Images/indoNovember17.jpg)";
let souKorea = "url(/Images/southKorea.jpg)";

let fotos = [dog, bunny, indo, souKorea];
let counter = 0;

forwardButton.addEventListener("click", function () {
  counter++;

  if (counter >= fotos.length) {
    counter = 0;
  }

  randomPicture.innerHTML = counter;
  randomPicture.style.backgroundImage = fotos[counter];

  console.log("here is the counter " + counter);
});

backButton.addEventListener("click", function () {
  counter--;

  if (counter < 0) {
    counter = fotos.length - 1;
  }

  randomPicture.innerHTML = counter;
  randomPicture.style.backgroundImage = fotos[counter];
});
