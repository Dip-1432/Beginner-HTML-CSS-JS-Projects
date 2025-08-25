const containerLeft = document.querySelector(".left");
const containerRight = document.querySelector(".right");

const mainContainer = document.querySelector(".content");

const headerLeft = document.querySelector("h2");
const headerRight = document.getElementById("text");

containerLeft.style.backgroundColor = "black";
containerRight.style.backgroundColor = "black";


containerLeft.addEventListener('mouseover', () => {
   containerRight.style.backgroundImage = `url(./images/300815_0_jesioe.webp)`;
   containerLeft.style.backgroundImage = `url(./images/iphone14-pro-max-lineup.png)`;
   headerRight.innerHTML = "apple";
   headerLeft.innerHTML = "apple";
});
containerRight.addEventListener('mouseover', () => {
   containerLeft.style.backgroundImage = `url(./images/samsung-galaxy-s23-ultra-transparent-image-free-png.webp)`;
   containerRight.style.backgroundImage = `url(./images/Thumb1.png)`;
   headerLeft.innerHTML = "samsung";
   headerRight.innerHTML = "samsung";
});

mainContainer.addEventListener('mouseleave', () => {
   containerLeft.style.backgroundImage = `url(./images/iphone14-pro-max-lineup.png)`;
   containerRight.style.backgroundImage = `url(./images/Thumb1.png)`;
   headerLeft.innerHTML = "apple";
   headerRight.innerHTML = "samsung";
});

