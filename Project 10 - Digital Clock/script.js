const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById('ampm');



// console.log(`Hours: ${hrs},   Minutes: ${mins},    Seconds: ${secs}`);
// console.log(hours);
// console.log(minutes);
// console.log(seconds);
function clock() {
   const time = new Date();
   let hrs = time.getHours();
   let mins = time.getMinutes();
   let secs = time.getSeconds();
   let myAmPM = "am";

   if (hrs > 12) {
      hrs -= 12;
      myAmPM = "pm";
   }
   if (hrs === 0) {
      hrs = 12;
   }
   
   hrs = (hrs < 10) ? " " + hrs: hrs;
   mins = (mins < 10) ? " " + mins: mins;
   secs = (secs < 10) ? " " + secs : secs;
   
   hours.innerText = hrs;
   minutes.innerText = mins;
   seconds.innerText = secs;
   ampm.innerText = myAmPM;
   setTimeout(() => {
      clock();
   }, 1000);
}
clock();
