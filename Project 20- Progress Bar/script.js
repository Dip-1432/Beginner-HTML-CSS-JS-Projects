const texts = document.querySelectorAll(".content .progress-container .wrapper p");
const iconWrappers = document.querySelectorAll(".content .progress-container .wrapper .icon-wrapper");

const textsArray = Array.from(texts);
const iconWrappersArrray = Array.from(iconWrappers);

/*
// console.log(textsArray);

// console.log(textsArray.length+","+iconWrappersArrray.length);

// textsArray.forEach((e) => {
//    e.style.color = "darkgreen";
// });

// iconWrappersArrray.forEach((e) => {
//    e.style.backgroundColor = "lightgreen";
//    e.style.border = "5px solid darkgreen";
// });
*/

const previousButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const progress = document.querySelector(".content .progress-container .progress");

// console.log(progress.style.width);

let i = 0;
// let progressVal = progress.style.width;
// console.log(parseFloat(progressVal));


nextButton.addEventListener('click', increaseProgress);
previousButton.addEventListener('click', decreaseProgress);

function increaseProgress(){
   if (i === 6) {
      nextButton.disabled = true;
      return;
   }
   progress.style.width = (16.5*(i+1)) + "%";
   textsArray[i*2].style.color = "darkgreen";
   textsArray[(i*2) + 1].style.color = "darkgreen";

   iconWrappersArrray[i].style.backgroundColor = "lightgreen";
   iconWrappersArrray[i].style.border = "5px solid darkgreen";

   i += 1;
   if (previousButton.disabled === true) {
      previousButton.disabled = false;
   }
}

function decreaseProgress() {
   if (i === 0) {
      previousButton.disabled = true;
      return;
   }
   progress.style.width = (16.5*(i-1)) + "%";
   textsArray[(i-1)*2].style.color = "maroon";
   textsArray[((i-1)*2) + 1].style.color = "maroon";

   iconWrappersArrray[i-1].style.backgroundColor = "lightcoral";
   iconWrappersArrray[i-1].style.border = "5px solid maroon";

   i -= 1;
   if (nextButton.disabled === true) {
      nextButton.disabled = false;
   }
}