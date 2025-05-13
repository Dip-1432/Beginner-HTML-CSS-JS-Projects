const inputC=document.getElementById("Celsius");
const inputF=document.getElementById("Fahrenheit");
const inputK=document.getElementById("Kelvin");
const btn = document.getElementById("Convert");

function convert(event) {
   const value = event.target.id;
   const inputValue = parseFloat(event.target.value);
   switch (value) {
      case "Celsius": 
         inputF.value = ((inputValue * 9) / 5 + 32).toFixed(2);
         inputK.value = (inputValue + 273.15).toFixed(2);
         break;
      case "Fahrenheit":
         inputC.value = ((inputValue - 32) * 5 / 9).toFixed(2);
         inputK.value = ((inputValue - 32) * 5 / 9 + 273.15).toFixed(2);
         break;
      case "Kelvin":
         inputC.value = (inputValue - 273.15).toFixed(2);
         inputF.value = ((inputValue - 273.15) * 9 / 5 + 32).toFixed(2);
         break;
      default:
         break;
   }
}

// btn.addEventListener("click",convert());