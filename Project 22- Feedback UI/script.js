const review = document.querySelectorAll(".content .container .wrapper");
const textReview = document.getElementById("text-review");

const btn = document.getElementById('btn');

const content = document.querySelector(".content");
const container = document.querySelector(".content .container");

const reviewArray = Array.from(review);

// reviewArray.forEach((e) => {
//    console.log(e);
// })
let selectedReview = "";
reviewInput();
function reviewInput() {
   reviewArray.forEach((review) => {
      review.addEventListener('click', (e) => {
         const clickedElement = (e.target.parentNode === container) ? (e.target) :(e.target.parentNode);
         selectedReview = clickedElement.innerText;
         // console.log(selectedReview);
         // console.log(e.target.parentElement);
         Array.from(clickedElement.parentNode.children).forEach((siblings) => {
            siblings.style.backgroundColor = "";
         })
         clickedElement.style.backgroundColor = "darkcyan";
      })
   });
}

btn.addEventListener('click', () => {
   // reviewInput();
   const reviewText = textReview.value;
   // console.log(reviewText);
   if (selectedReview !== "") {
      content.style.backgroundColor = "darkcyan";
      content.innerHTML = `feedback received successfully <i class="fa-solid fa-check" style="color: green; "></i>
      your feedback was: <strong>${selectedReview}</strong>
      <strong>${reviewText}</strong>
      <p>We'll use your feedback and work our best to improve our customer support.</p>`;
   }
});