fetch("https://restcountries.com/v3.1/name/peru").then(function (response) {
  response.json().then(function (result) {
    console.log(result.name);
  });
});
document.write(`${result.name}`);
