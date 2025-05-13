const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const timer = document.getElementById('timer');

let startTime, elapsedTime = 0;
let timerInterval;
function startTimer() {
   startTime = Date.now() - elapsedTime;
   timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      timer.textContent = formatTime(elapsedTime);
   }, 10);
   start.disabled = true;
   stop.disabled = false;
}
function formatTime(eTime) {
   let ms = Math.floor((eTime % 1000) / 10);
   let s = Math.floor(((eTime % (1000 * 60)) / 1000));
   let m = Math.floor(((eTime % (1000 * 60 * 60)) / (1000 * 60)));
   let h = Math.floor(eTime / (1000 * 60 * 60));

   h = (h > 99) ? h : ((h > 9) ? "0" + h : ("00" + h));
   m = (m > 99) ? m : ((m > 9) ? "0" + m : ("00" + m));
   s = (s > 99) ? s : ((s > 9) ? "0" + s : ("00" + s));
   ms = (ms > 99) ? ms : ((ms > 9) ? "0" + ms : ("00" + ms));

   return `${h} : ${m} : ${s} : ${ms}`;
   
   return `${String(h).padStart(2, "0")} : ${String(m).padStart(2,"0")} : ${String(s).padStart(2, "0")} : ${String(ms).padStart(2, "0")}`;
   
   return (h + " : " + m + " : " + s + " : " + ms);
}
function stopTimer() {
   clearInterval(timerInterval);
   stop.disabled = true;
   start.disabled = false;
}
function resetTimer() {
   clearInterval(timerInterval);

   elapsedTime = 0;
   timer.innerText = "00:00:00:00";

   stop.disabled = true;
   start.disabled = false;

}
start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);