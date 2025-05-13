///lw] Role of unary + operator.
let myName = "42";
console.log("Value is: ",myName,"Type is: ",typeof myName); // 42 string
myName = +myName;
console.log("Value is: ", myName, "Type is: ", typeof myName); // 42 number
// The + operator converts the string to a number.

const inputC = document.getElementById("Celsius");
const inputF = document.getElementById("Fahrenheit");
const inputK = document.getElementById("Kelvin");
const btn = document.getElementById("Convert");

function inputReceive(){
   const valueC=inputC.value;
   const valueF = inputF.value;
   const valueK = inputK.value;
   if (valueC) {
      alert("Value of Celsius: "+valueC);
   }
   else if (valueF) {
      alert("Value of Fahrenheit: "+valueF);
   }
   else if (valueK) {
      alert("Value of Kelvin: "+valueK);
   }
   else{
      alert("Please enter the value.");
   }
}
function convert(event){
   console.log(event);
   console.log(event.target);
   console.log(event.target.value);
   console.log(typeof event.target.value);
   console.log(typeof +event.target.value);
   alert(`Value is: ${+event.target.value} received from ${event.target.id} type is: ${typeof +event.target.value}`);
}

btn.addEventListener("click",inputReceive);
