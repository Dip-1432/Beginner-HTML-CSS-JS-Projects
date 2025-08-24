/*
///dp] play
///dc] <i class="fa-solid fa-play"></i>
///dp] pause
///dc] <i class="fa-solid fa-stop"></i>
///dp] percent
///dc] <i class="fa-solid fa-percent"></i>
///dp] retry
///dc] <i class="fa-solid fa-rotate-right"></i>
*/

const buttonStartStop = document.getElementById('start-stop');

const barProgress = document.querySelector('.bar-progress');
const optionalMessage = document.querySelector('.optional-msg');
const loading = document.getElementById('load');

const fillBar = document.querySelector('.bar-front');

barProgress.textContent = "";
optionalMessage.textContent = "";
loading.textContent = "";

let i = 0;
let interval;

function loadBar() {
   loading.textContent = "loading .........";
   buttonStartStop.classList.remove('animate');
   if (buttonStartStop.innerHTML === `<i class="fa-solid fa-play"></i>`) {
      optionalMessage.innerHTML = `Resumed from ${i} <i class="fa-solid fa-percent"></i>`;
      if (i === 100) {
         buttonStartStop.innerHTML = `<i class="fa-solid fa-rotate-right"></i>`;
      }
      else {
         buttonStartStop.innerHTML = `<i class="fa-solid fa-stop"></i>`;
      }
      updateNum();
   }
   else if(buttonStartStop.innerHTML===`<i class="fa-solid fa-stop"></i>`){
      optionalMessage.innerHTML = `Paused at ${i-1} <i class="fa-solid fa-percent"></i>`;
      if (i === 100) {
         buttonStartStop.innerHTML = `<i class="fa-solid fa-rotate-right"></i>`;
      }
      else {
         buttonStartStop.innerHTML = `<i class="fa-solid fa-play"></i>`;
      }
      clearTimeout(interval);
   }
   else if (buttonStartStop.innerHTML === `<i class="fa-solid fa-rotate-right"></i>`) {
      buttonStartStop.classList.add('animate');
      i = 0;
      clearInterval(interval);
      optionalMessage.innerHTML = "";
      setTimeout(() => {
         buttonStartStop.innerHTML = `<i class="fa-solid fa-stop"></i>`;
      }, 500);
      updateNum();
   }
   else {
      optionalMessage.innerHTML = "Some error occurred. Please refresh the page";
      alert("Error.......")
   }
}


function updateNum() {
   // fillBar.style.width = `${i} %`;
   fillBar.style.width = i + "%";
   barProgress.innerHTML = `${i} <i class="fa-solid fa-percent"></i>`;
   i++;
   if (i < 101) {
      interval= setTimeout(updateNum, 100);
   }
   if (i === 100) {
      loading.textContent = "loading completed";
      buttonStartStop.innerHTML = `<i class="fa-solid fa-rotate-right"></i>`;
   }
}

buttonStartStop.addEventListener('click', loadBar);