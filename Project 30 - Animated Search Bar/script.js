const toggleButton = document.getElementById("btn");
const inputBar = document.getElementById("input-bar");
const searchButton = document.querySelector(".search-btn");

inputBar.style.width = "0%";
searchButton.style.width = "0%";
searchButton.innerText = "";

let isExpanded = false;

toggleButton.addEventListener("click", () => {
   if (!isExpanded) {
      toggleButton.style.position = "static";
      inputBar.style.width = "65%";
      searchButton.style.width = "22.5%";
      searchButton.innerText = "Search";
   } else {
      toggleButton.style.position = "absolute";
      inputBar.style.width = "0%";
      searchButton.style.width = "0%";
      searchButton.innerText = "";
   }
   isExpanded = !isExpanded;
});