/*

USD to other currencies:
1 USD = 73.65 INR
1 USD = 115.50 YEN
1 USD = 6.37 YUAN
1 USD = 0.88 EURO

INR to other currencies:
1 INR = 0.014 USD
1 INR = 1.57 YEN
1 INR = 0.086 YUAN
1 INR = 0.012 EURO

YEN to other currencies:
1 YEN = 0.0087 USD
1 YEN = 0.64 INR
1 YEN = 0.055 YUAN
1 YEN = 0.0076 EURO

YUAN to other currencies:
1 YUAN = 0.16 USD
1 YUAN = 11.59 INR
1 YUAN = 18.13 YEN
1 YUAN = 0.14 EURO

EURO to other currencies:
1 EURO = 1.14 USD
1 EURO = 84.10 INR
1 EURO = 130.94 YEN
1 EURO = 7.31 YUAN

*/


const convertButton = document.getElementById('btn');
const resetButton = document.getElementById('res');

const userChoicesInput = document.getElementById('userChoiceInput');
const userChoicesOutput = document.getElementById("userChoiceOutput");
// console.log(userChoicesInput);

const userInput = document.getElementById('userInput');
const userOutput = document.getElementById('userOutput');

const formula = document.getElementById('hint');
formula.innerText = "";


// Conversion Functions: 
// USD to other currencies
const USDToINR = (value) => value * 73.65;
const USDToYEN = (value) => value * 115.50;
const USDToYUAN = (value) => value * 6.37;
const USDToEURO = (value) => value * 0.88;

// INR to other currencies
const INRToUSD = (value) => value * 0.014;
const INRToYEN = (value) => value * 1.57;
const INRToYUAN = (value) => value * 0.086;
const INRToEURO = (value) => value * 0.012;

// YEN to other currencies
const YENToUSD = (value) => value * 0.0087;
const YENToINR = (value) => value * 0.64;
const YENToYUAN = (value) => value * 0.055;
const YENToEURO = (value) => value * 0.0076;

// YUAN to other currencies
const YUANToUSD = (value) => value * 0.16;
const YUANToINR = (value) => value * 11.59;
const YUANToYEN = (value) => value * 18.13;
const YUANToEURO = (value) => value * 0.14;

// EURO to other currencies
const EUROToUSD = (value) => value * 1.14;
const EUROToINR = (value) => value * 84.10;
const EUROToYEN = (value) => value * 130.94;
const EUROToYUAN = (value) => value * 7.31;




function calculate() {
   const inputValue = parseFloat(userInput.value);
   if (isNaN(inputValue)) {
      formula.innerText = "Please enter a number to convert";
      return; // Exit the function early
   }

   const inputUnit = userChoicesInput.value;
   const outputUnit = userChoicesOutput.value;
   if (!inputUnit || !outputUnit) {
      formula.innerText = "Please select the currencies to convert";
      return; // Exit the function early
   }

   let result;
   switch (inputUnit) {
      case "1": // USD to other units
         switch (outputUnit) {
            case "1": // USD to USD
               result = inputValue;
               formula.innerText = " 1 USD = 1 USD\nResult:\t";
               break;
            case "2": // USD to INR
               result = USDToINR(inputValue);
               formula.innerText = ` 1 USD = 73.65 INR\nResult:\t`;
               break;
            case "3": // USD to EURO
               result = USDToEURO(inputValue);
               formula.innerText = ` 1 USD = 0.88 EURO\nResult:\t`;
               break;
            case "4": // USD to YUAN
               result = USDToYUAN(inputValue);
               formula.innerText = ` 1 USD = 6.37 YUAN\nResult:\t`;
               break;
            case "5": // USD to YEN
               result = USDToYEN(inputValue);
               formula.innerText = ` 1 USD = 115.50 YEN\nResult:\t`;
               break;
            default:
               result = "Invalid output unit";
         }
         break;
      case "2": // INR to other units
         switch (outputUnit) {
            case "1": // INR to USD
               result = INRToUSD(inputValue);
               formula.innerText = ` 1 INR = 0.014 USD\nResult:\t`;
               break;
            case "2": // INR to INR
               result = inputValue;
               formula.innerText = ` 1 INR = 1 INR\nResult:\t`;
               break;
            case "3": // INR to EURO
               result = INRToEURO(inputValue);
               formula.innerText = ` 1 INR = 0.012 EURO\nResult:\t`;
               break;
            case "4": // INR to YUAN
               result = INRToYUAN(inputValue);
               formula.innerText = ` 1 INR = 0.086 YUAN\nResult:\t`;
               break;
            case "5": // INR to YEN
               result = INRToYEN(inputValue);
               formula.innerText = ` 1 INR = 1.57 YEN\nResult:\t`;
               break;
            default:
               result = "Invalid output unit";
         }
         break;
      case "3": // EURO to other units
         switch (outputUnit) {
            case "1": // EURO to USD
               result = EUROToUSD(inputValue);
               formula.innerText = ` 1 EURO = 1.14 USD\nResult:\t`;
               break;
            case "2": // EURO to INR
               result = EUROToINR(inputValue);
               formula.innerText = ` 1 EURO = 84.10 INR\nResult:\t`;
               break;
            case "3": // EURO to EURO
               result = inputValue;
               formula.innerText = ` 1 EURO = 1 EURO\nResult:\t`;
               break;
            case "4": // EURO to YUAN
               result = EUROToYUAN(inputValue);
               formula.innerText = ` 1 EURO = 7.31 YUAN\nResult:\t`;
               break;
            case "5": // EURO to YEN
               result = EUROToYEN(inputValue);
               formula.innerText = ` 1 EURO = 130.94 YEN\nResult:\t`;
               break;
            default:
               result = "Invalid output unit";
         }
         break;
      case "4": // YUAN to other units
         switch (outputUnit) {
            case "1": // YUAN to USD
               result = YUANToUSD(inputValue);
               formula.innerText = ` 1 YUAN = 0.16 USD\nResult:\t`;
               break;
            case "2": // YUAN to INR
               result = YUANToINR(inputValue);
               formula.innerText = ` 1 YUAN = 11.59 INR\nResult:\t`;
               break;
            case "3": // YUAN to EURO
               result = YUANToEURO(inputValue);
               formula.innerText = ` 1 YUAN = 0.14 EURO\nResult:\t`;
               break;
            case "4": // YUAN to YUAN
               result = inputValue;
               formula.innerText = ` 1 YUAN = 1 YUAN\nResult:\t`;
               break;
            case "5": // YUAN to YEN
               result = YUANToYEN(inputValue);
               formula.innerText = ` 1 YUAN = 18.13 YEN\nResult:\t`;
               break;
            default:
               result = "Invalid output unit";
         }
         break;
      case "5": // YEN to other units
         switch (outputUnit) {
            case "1": // YEN to USD
               result = YENToUSD(inputValue);
               formula.innerText = ` 1 YEN = 0.0087 USD\nResult:\t`;
               break;
            case "2": // YEN to INR
               result = YENToINR(inputValue);
               formula.innerText = ` 1 YEN = 0.64 INR\nResult:\t`;
               break;
            case "3": // YEN to EURO
               result = YENToEURO(inputValue);
               formula.innerText = ` 1 YEN = 0.0076 EURO\nResult:\t`;
               break;
            case "4": // YEN to YUAN
               result = YENToYUAN(inputValue);
               formula.innerText = ` 1 YEN = 0.055 YUAN\nResult:\t`;
               break;
            case "5": // YEN to YEN
               result = inputValue;
               formula.innerText = ` 1 YEN = 1 YEN\nResult:\t`;
               break;
            default:
               result = "Invalid output unit";
         }
         break;
      default:
         result = "Invalid input unit";
   }

   userOutput.value = result.toFixed(5); // Format the output to 5 decimal places
   formula.appendChild(document.createTextNode(userOutput.value));
}

// convertButton.addEventListener('click', () => {
//    console.log(typeof userChoicesInput.value);
// })
function reset() {
   userInput.value = "";
   userChoicesInput.value = "";
   userOutput.value = "";
   userChoicesOutput.value = "";
   formula.innerText = "";
}
convertButton.addEventListener('click', calculate);
resetButton.addEventListener('click', reset);