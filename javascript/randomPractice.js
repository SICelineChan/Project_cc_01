let number = Math.random() * 10;
console.log(Math.floor(number));

let magicEightBall = prompt("Ask the great magic eight ball a question!");
let oracle = document.querySelector("#oracle");

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let answer = generateRandomNumber(0, 8);
// oracle.innerHTML = answer;
console.log(answer);

if (answer === 0) {
  oracle.innerHTML = `It seems likely`;
  console.log("It seems likely");
}
if (answer === 1) {
  oracle.innerHTML = `Outlook is gonna be a YES!`;
  console.log("Outlook is gonna be a YES!");
}
if (answer === 2) {
  oracle.innerHTML = `Ask me again later!`;
  console.log("Ask me again later!");
}
if (answer === 3) {
  oracle.innerHTML = `Don't count on it!`;
  console.log("Don't count on it!");
}
if (answer === 4) {
  oracle.innerHTML = `Reply hazy try again!`;
  console.log("Reply hazy try again!");
}
if (answer === 5) {
  oracle.innerHTML = `All signs points to NO!`;
  console.log("All signs points to NO!");
}
if (answer === 6) {
  oracle.innerHTML = `Better not tell you now...`;
  console.log("Better not tell you now...");
}
if (answer === 7) {
  oracle.innerHTML = `All look GOOD!`;
  console.log("All look GOOD!");
}
if (answer === 8) {
  oracle.innerHTML = `My souces say NÖ!`;
  console.log("My souces say NÖ!");
}
