// let number = Math.random() * 10;
// console.log(Math.floor(number));
let magicEightBall = "Will I travel Australia?";

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// let answer = generateRandomNumber(0, 8);
// console.log(answer);

const randomPicture = document.querySelector("#randomPicture");
const turnButton = document.querySelector("#turnButton");

let pic1 = "url(./Images/cat.png)";
let pic2 = "url(./Images/bunnyKor.png)";
let pic3 = "url(./Images/dog.png)";

let picCarousel = [pic1, pic2, pic3];
let counter = 0;

turnButton.addEventListener("click", function () {
  randomPicture.style.image = generateRandomNumber(0, picCarousel - 1);
});

// if (answer === 0) {
//   console.log("It seems likely");
// }
// if (answer === 1) {
//   console.log("Outlook is gonna be a YES!");
// }
// if (answer === 2) {
//   console.log("Ask me again later!");
// }
// if (answer === 3) {
//   console.log("Don't count on it!");
// }
// if (answer === 4) {
//   console.log("Reply hazy try again!");
// }
// if (answer === 5) {
//   console.log("All signs points to NO!");
// }
// if (answer === 6) {
//   console.log("Better not tell you now...");
// }
// if (answer === 7) {
//   console.log("All look GOOD!");
// }
// if (answer === 8) {
//   console.log("My souces say NÖ!");
// }
