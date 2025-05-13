const genBtn = document.getElementById('gen');
const cpyBtn = document.getElementById('cpy');
const resBtn = document.getElementById('res');
const input = document.getElementById('userInput');

const outputField = document.getElementById('pass');

function randomPass(num) {
   const lowerCaseValues = "abcdefghijklmnopqrstuvwxyz";
   const upperCaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const numValues = "0123456789";
   const specialCharValues = "!@#$%^&*._";

   let pass = "";
   for (let i = 0; i < num; i++){
      const randLCValue = lowerCaseValues[Math.floor(Math.random() * (lowerCaseValues.length))];
      const randUCValue = upperCaseValues[Math.floor(Math.random() * (upperCaseValues.length))];
      const randNValue = numValues[Math.floor(Math.random() * (numValues.length))];
      const randSCValue = specialCharValues[Math.floor(Math.random() * (specialCharValues.length))];
      
      const myArr = [randLCValue, randUCValue, randNValue, randSCValue];
      pass += myArr[Math.floor(Math.random() * 4)];
   }
   return pass;
}

// const myInt=setInterval(() => {
//    console.log(randomPass(5));
// }, 1000);
// clearInterval(myInt);

genBtn.addEventListener('click', () => {
   const value = parseInt(input.value);
   if (!value) {
      outputField.value = "Please select your length of password"
   }
   else {
      outputField.value = randomPass(value);
   }
});
resBtn.addEventListener('click', () => {
   outputField.value = "";
   input.value = "";
});
/*
cpyBtn.addEventListener('click', () => {
   // Select the text in the input field
   outputField.select();
   outputField.setSelectionRange(0, 99999); // For mobile devices

   // Copy the selected text to the clipboard
   document.execCommand("copy");

   // Optionally, alert the user that the text has been copied
   alert("Copied the text: " + outputField.value);
   // outputField.value = "Successfully copied";

   // setTimeout(() => {
   //    outputField.value += " successfully copied";
   // }, 2000);
});
*/
cpyBtn.addEventListener('click', function () {
   if (!(outputField.value)) {
      outputField.value = "please generate a password to copy";
      setTimeout(() => {
         outputField.value = "";
      }, 1000);
      return;
   }
   // Copy the input value to the clipboard using the Clipboard API
   navigator.clipboard.writeText(outputField.value).then(function () {
      // Success! Optionally, alert the user
      // alert('Copied the text: ' + outputField.value);
      outputField.value += "     successfully copied!!!";
   }).catch(function (err) {
      console.error('Could not copy text: ', err);
   });
}); 