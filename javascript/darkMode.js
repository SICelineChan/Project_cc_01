const body = document.querySelector("body");
const darkModeButton = document.querySelector("#darkModeButton");
darkModeButton.addEventListener("click", function () {
  //   alert("click for dark mode");
  let darkCheck = body.classList.contains("dark");

  if (darkCheck) {
    body.className = "";
    darkModeButton.innerHTML = `Dark Mode on.`;
  } else {
    body.className = "dark";
    darkModeButton.innerHTML = `Dark Mode Off!`;
  }
});
