let number = Math.random() * 10;
console.log(Math.floor(number));
let magicEightBall = prompt("Ask a question?");

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let answer = generateRandomNumber(0, 8);
console.log(answer);

if (answer === 0) {
  console.log("It seems likely");
}
if (answer === 1) {
  console.log("Outlook is gonna be a YES!");
}
if (answer === 2) {
  console.log("Ask me again later!");
}
if (answer === 3) {
  console.log("Don't count on it!");
}
if (answer === 4) {
  console.log("Reply hazy try again!");
}
if (answer === 5) {
  console.log("All signs points to NO!");
}
if (answer === 6) {
  console.log("Better not tell you now...");
}
if (answer === 7) {
  console.log("All look GOOD!");
}
if (answer === 8) {
  console.log("My souces say NÖ!");
}
