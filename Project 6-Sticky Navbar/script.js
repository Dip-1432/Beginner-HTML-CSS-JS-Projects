const nav=document.querySelector(".nav");
const bottom = document.querySelector(".bottom");

function updateClass() {
   if (window.scrollY >= bottom.offsetTop - nav.offsetHeight) { 
      nav.classList.add("sticky");
   } else {
      nav.classList.remove("sticky");
   }
}
window.addEventListener("scroll", updateClass);
