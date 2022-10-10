const body = document.querySelector("body");
const darkModeButton = document.querySelector("#darkModeButton");

darkModeButton.addEventListener("click", function () {
  //   alert("click for dark mode");
  let darkCheck = body.classList.contains("dark");

  if (darkCheck) {
    body.className = "";
    darkModeButton.innerHTML = `Dark Mode on.`;
    localStorage.setItem("darkMode", "disabled");

    // alert("dark mode to turn on");
  } else {
    body.className = "dark";
    darkModeButton.innerHTML = `Dark Mode Off!`;
    localStorage.setItem("darkMode", "enabled");
    // alert("dark mode to turn off");
  }
});

const textButton = document.querySelector("#textButton");

textButton.addEventListener("click", function () {
  // alert("click for larger text");
  let largerFont = body.classList.contains("large");

  if (largerFont) {
    body.className = "";
    textButton.innerHTML = `Font larger`;
  } else {
    body.className = "large";
    textButton.innerHTML = `Font smaller`;
  }
});
console.log(darkModeButton);
