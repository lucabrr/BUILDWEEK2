 let searchButton = document.getElementById("search");
console.log(searchButton);
let mainColumn = document.querySelectorAll("main div.container-fluid");

searchButton.addEventListener("click", () => {
  mainColumn.forEach((element) => {
    element.classList.add("destruction");
  });
});




