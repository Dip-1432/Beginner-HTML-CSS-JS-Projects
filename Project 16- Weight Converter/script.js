/*
1.) Kilogram to other units
1 Kilogram = 1000 Grams
1 Kilogram = 2.20462262 Pounds
1 Kilogram = 35.273962 Ounces

2.) Pound to other units
1 Pound= 0.45359237 Kilogram
1 Pound= 16 Ounces
1 Pound= 453.59237 Gram

3.) Ounce to other units
1 Ounce = 0.02834952 Kilogram
1 Ounce = 0.0625 Pound
1 Ounce = 28.3495231 Gram

4.) Gram to other units
1 Gram = 0.001 Kilogram
1 Gram = 0.00220462 Pound
1 Gram = 0.03527396 Ounce

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
const KilogramToGram = (value) => value * 1000;
const KilogramToPound = (value) => value * 2.20462262;
const KilogramToOunce = (value) => value * 35.273962;

const PoundToKilogram = (value) => value * 0.45359237;
const OunceToKilogram = (value) => value * 0.02834952;
const GramToKilogram = (value) => value * 0.001;




function calculate() {
   const inputValue = parseFloat(userInput.value);
   if (isNaN(inputValue)) {
      formula.innerText = "Please enter a number to convert";
      return; // Exit the function early
   }

   const inputUnit = userChoicesInput.value;
   const outputUnit = userChoicesOutput.value;
   if (!inputUnit || !outputUnit) {
      formula.innerText = "Please select the units to convert";
      return; // Exit the function early
   }

   let result;
   switch (inputUnit) {
      case "1": // Kilogram
         switch (outputUnit) {
            case "1": // Kilogram to Kilogram
               result = inputValue;
               formula.innerText = "Formula: 1 Kilogram = 1 Kilogram\nResult:\t";
               break;
            case "2": // Kilogram to Pound
               result = KilogramToPound(inputValue);
               formula.innerText = "Formula: 1 Kilogram = 2.20462262 Pounds\nResult:\t";
               break;
            case "3": // Kilogram to Ounce
               result = KilogramToOunce(inputValue);
               formula.innerText = "Formula: 1 Kilogram = 35.273962 Ounces\nResult:\t";
               break;
            case "4": // Kilogram to Gram
               result = KilogramToGram(inputValue);
               formula.innerText = "Formula: 1 Kilogram = 1000 Grams\nResult:\t";
               break;
            default:
               result = "Invalid output unit";
         }
         break;
      case "2": // Pound
         switch (outputUnit) {
            case "1": // Pound to Kilogram
               result = PoundToKilogram(inputValue);
               formula.innerText = "Formula: 1 Pound = 0.45359237 Kilogram\nResult:\t";
               break;
            case "2": // Pound to Pound
               result = inputValue;
               formula.innerText = "Formula: 1 Pound = 1 Pound\nResult:\t";
               break;
            case "3": // Pound to Ounce
               result = PoundToKilogram(KilogramToOunce(inputValue));
               formula.innerText = "Formula: 1 Pound = 16 Ounces\nResult:\t";
               break;
            case "4": // Pound to Gram
               result = PoundToKilogram(KilogramToGram(inputValue));
               formula.innerText = "Formula: 1 Pound = 453.59237 Grams\nResult:\t";
               break;
            default:
               result = "Invalid output unit";
         }
         break;
      case "3": // Ounce
         switch (outputUnit) {
            case "1": // Ounce to Kilogram
               result = OunceToKilogram(inputValue);
               formula.innerText = "Formula: 1 Ounce = 0.02834952 Kilogram\nResult:\t";
               break;
            case "2": // Ounce to Pound
               result = OunceToKilogram(KilogramToPound(inputValue));
               formula.innerText = "Formula: 1 Ounce = 0.0625 Pound\nResult:\t";
               break;
            case "3": // Ounce to Ounce
               result = inputValue;
               formula.innerText = "Formula: 1 Ounce = 1 Ounce\nResult:\t";
               break;
            case "4": // Ounce to Gram
               result = OunceToKilogram(KilogramToGram(inputValue));
               formula.innerText = "Formula: 1 Ounce = 28.3495231 Grams\nResult:\t";
               break;
            default:
               result = "Invalid output unit";
         }
         break;
      case "4": // Gram
         switch (outputUnit) {
            case "1": // Gram to Kilogram
               result = GramToKilogram(inputValue);
               formula.innerText = "Formula: 1 Gram = 0.001 Kilogram\nResult:\t";
               break;
            case "2": // Gram to Pound
               result = GramToKilogram(KilogramToPound(inputValue));
               formula.innerText = "Formula: 1 Gram = 0.00220462 Pound\nResult:\t";
               break;
            case "3": // Gram to Ounce
               result = GramToKilogram(KilogramToOunce(inputValue));
               formula.innerText = "Formula: 1 Gram = 0.03527396 Ounce\nResult:\t";
               break;
            case "4": // Gram to Gram
               result = inputValue;
               formula.innerText = "Formula: 1 Gram = 1 Gram\nResult:\t";
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