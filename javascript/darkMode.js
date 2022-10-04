const body = document.querySelector("body");
const darkModeButton = document.querySelector("#darkModeButton");
darkModeButton.addEventListener("click", function () {
  //   alert("click for dark mode");
  let darkCheck = body.classList.contains("dark");

  if (darkCheck) {
    body.className = "";
  } else {
    body.className = "dark";
  }
});

// darkModeButton.addEventListener("click", () => {
//   let bodyCheck = body.classList.contains("dark");

//   if (bodyCheck) {
//     body.className = "";
//   } else {
//     body.className = "dark";
//   }
// });
