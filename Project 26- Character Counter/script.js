const userInput=document.getElementById('user-input');
const charCount=document.getElementById('char-count');
const remChar = document.getElementById('rem-char');
const maxChar = document.getElementById('maxlength-num');


userInput.addEventListener('input', () => {
   const maxLength = parseFloat(maxChar.value);
   if (!isNaN(maxLength) || Number.isInteger(maxLength) || maxLength > 0) {
      userInput.setAttribute('maxlength', maxLength);
      charCount.textContent = `character count : ${userInput.value.length}`;
      remChar.textContent = `remaining character : ${maxLength - userInput.value.length}`;
   }
});