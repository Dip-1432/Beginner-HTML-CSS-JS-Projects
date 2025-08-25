const mainContainer = document.getElementById("menu");
const mainContainerText = document.querySelector("#menu h2");
const icon = document.querySelector(".container i");
const socialMediaContainer = document.getElementById("social-media");
const socialMediaList = document.getElementById("lists");

const lists = Array.from(socialMediaList.children);
console.log(lists);
console.log(mainContainer);

mainContainer.addEventListener("click", () => {
   toggler();
})

socialMediaContainer.classList.toggle("hidden");

function toggler(a = socialMediaContainer, b = icon) {
   a.classList.toggle("hidden");
   b.classList.toggle("rotate");
}

lists.forEach(list => {
   list.addEventListener("click", () => {
      toggler();
      mainContainerText.innerHTML = list.innerHTML;
   });
})

