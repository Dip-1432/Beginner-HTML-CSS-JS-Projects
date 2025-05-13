const myDivs = document.getElementsByClassName('box');
const myArr = Array.from(myDivs);

myArr.forEach((div) => {
   div.addEventListener('click', () => {
      document.body.style.backgroundColor = div.id;
   });
});
