const convertBtn = document.getElementById('btn');
const resetBtn = document.getElementById('res');

const amount = document.getElementById('userInputAmount');
const interest = document.getElementById('userInputInterest');
const months = document.getElementById('userInputMonths');

const result = document.getElementById('result');

convertBtn.addEventListener('click', () => {
   const amountValue = parseFloat(amount.value);
   const interestValue = parseFloat(interest.value);
   const monthsValue = parseFloat(months.value);

   if (isNaN(amountValue) || isNaN(interestValue) || isNaN(monthsValue)) {
      reset();
      result.innerText = "Please enter valid values to calculate successfully";
      return;
   }
   const interestAmount = (interestValue / 100) * amountValue;
   const totalAmount = amountValue + interestAmount;

   const monthlyAmount = (totalAmount / monthsValue).toFixed(3);

   result.appendChild(document.createTextNode("\n" + monthlyAmount));
});
resetBtn.addEventListener('click', reset);
function reset() {
   amount.value = "";
   interest.value = "";
   months.value = "";
   result.innerText = "Your Monthly payment amount :";
}