const btn = document.getElementById('gen');
const input = document.getElementById('userInput');
const div = document.querySelector('.rancol');
// console.log(input);

// const myArr = Array.from(input.children);
// console.log(myArr);

// let value;
// myArr.forEach((v) => {
//    v.addEventListener('click', () => {
//       // value = v.value;
//       console.log(`clicked on ${v}, value: ${v.value}`);
//    })
// })
// myArr.forEach((v) => {
//    console.log(v);
// })
// input.addEventListener("click", (e) => {
//    console.log("clicked");
//    console.log(`Value: ${e.target.value}`);
   
// })

function randomColorGenerator() {
   const hexCodes = "0123456789abcdef";
   let color = "#";
   for (let i = 0; i < 6; i++){
      const ranVal = Math.floor(Math.random() * 16);
      color += hexCodes[ranVal];
   }
   return color;
}
/*
const myInt=setInterval(() => {
   console.log(randomColorGenerator());
}, 500);
clearInterval(myInt);
*/
function createDiv(num) {
   for (let i = 0; i < num; i++){
      const newDiv = document.createElement('div');
      newDiv.style.backgroundColor = randomColorGenerator();
      newDiv.style.color = (newDiv.style.backgroundColor === "black") ? "white" : "black";
      newDiv.classList.add('randCont');
      newDiv.textContent = randomColorGenerator();
      div.appendChild(newDiv);
   }
}

btn.addEventListener('click', () => {
   // console.log("clicked");
   // console.log(`Value: ${input.value}`);
   div.textContent = "";
   const val = parseInt(input.value);
   if (!val) {
      div.textContent = "Please Select a Number Above";
      return;
   }
   else {
      createDiv(val);
   }
});