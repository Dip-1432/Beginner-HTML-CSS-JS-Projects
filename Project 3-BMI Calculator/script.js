const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const btn = document.getElementById("calculate");
const BMI = document.getElementById("bmi");
const category = document.getElementById("category");
const risk = document.getElementById("risk");
const hint = document.getElementById("hint");

function calculate() {
   if (!heightInput.value || !weightInput.value) {
      BMI.innerText = '';
      category.innerText = "Please Enter Proper Details";
      risk.innerText = "";
      hint.innerText = "";
      return;
   }
   const height = parseFloat(heightInput.value);
   const weight = parseFloat(weightInput.value);
   const bmi = weight / (height * height);
   BMI.innerText = "Your BMI is: " + bmi.toFixed(3);
   const lowerPerfectBMI = 18.5;
   const upperPerfectBMI = 24.9;
   const lowerPerfectWeight = lowerPerfectBMI * height * height;
   const upperPerfectWeight = upperPerfectBMI * height * height;
   if (bmi < 18.5) {
      category.innerText = 'You fall under " Underweight " category';
      risk.innerText = "You have a High Risk";
      hint.innerText =
         "You must increase " +
         (lowerPerfectWeight - weight).toFixed(2) +
         " Kg weight to get out of risk";
   } else if (bmi <= 24.9) {
      category.innerText = 'You fall under " Normal Weight " category';
      risk.innerText = "You Don't have any Risk";
   } else if (bmi <= 29.9) {
      category.innerText = 'You fall under " Overweight " category';
      risk.innerText = "You have a High Risk";
      hint.innerText =
         "You must decrease " +
         (weight - upperPerfectWeight).toFixed(2) +
         " Kg weight to get out of risk";
   } else {
      category.innerText = 'You fall under " Obesity " category';
      risk.innerText = "You have a Very High Risk";
      hint.innerText =
         "You must decrease " +
         (weight - upperPerfectWeight).toFixed(2) +
         " Kg weight to get out of risk";
   }
}
btn.addEventListener("click", calculate);
