const popupContainer = document.querySelector(".popup-container");
const genButton = document.getElementById("gen");
const closeButton = document.getElementById("close");

// let isActive = false;
popupContainer.classList.add("active");

genButton.addEventListener("click", () => {
   popupContainer.classList.remove("active");
});

closeButton.addEventListener("click", () => {
   popupContainer.classList.add("active");
   document.body.style.filter = "blur(0px)";
});