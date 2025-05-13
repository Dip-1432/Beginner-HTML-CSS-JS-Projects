const btn = document.getElementById("Calculate");
const billInput = document.getElementById("billInput");
const tipInput = document.getElementById("tipInput");
const totalTip = document.getElementById("totalTip");
const totalBill = document.getElementById("totalBill");

function calculate() {
   const billValue = parseFloat(billInput.value);
   const tipValue = parseFloat(tipInput.value);

   if (isNaN(billValue) || isNaN(tipValue)) {
      totalTip.innerText = "";
      totalBill.innerText = "Please Enter Valid Numbers";
      return;
   }

   const totalTipValue = (tipValue / 100) * billValue;
   const totalBillValue = billValue + totalTipValue;

   totalTip.innerText = "Total Tip: " + totalTipValue.toFixed(2);
   totalBill.innerText = "Total Bill Amount: " + totalBillValue.toFixed(2);
}

btn.addEventListener("click", calculate);
