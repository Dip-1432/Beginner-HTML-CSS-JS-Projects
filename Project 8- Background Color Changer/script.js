const changeButton = document.getElementById('change');
const stopButton = document.getElementById('stop');

let myInterval;
function randomColorGenerator() {
   const hexCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
   let color = "#";
   for (let i = 0; i < 6; i++){
      let randNum = Math.floor(Math.random() * 16);
      color += hexCodes[randNum];
   }
   return color;
}
// const myInt = setInterval(() =>{
//    console.log(randomColorGenerator());
// }, 1000);

changeButton.addEventListener('click', () => {
   if (!myInterval) {
      myInterval = setInterval(() => {
         document.body.style.backgroundColor = randomColorGenerator();
      }, 500);
   }
});
stopButton.addEventListener('click', () => {
   clearInterval(myInterval);
   myInterval = null;
});
