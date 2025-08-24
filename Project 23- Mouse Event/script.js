const x = document.getElementById('x');
const y = document.getElementById('y');

window.addEventListener('mousemove', (e) => {
   x.innerText = e.clientX;
   y.innerText = e.clientY;
});