const day = document.getElementById("days");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");

const btn = document.getElementById("start");
const dateInput = document.getElementById("user-input");

day.innerText = "";
hour.innerText = "";
minute.innerText = "";
second.innerText = "";

let countdownInterval; // Declare a variable to hold the interval ID

btn.addEventListener("click", countdown);

function countdown() {
   if (!dateInput.value) {
      alert("Please enter a date");
      return;
   }

   const userDateTime = new Date(dateInput.value).getTime();

   // Clear any existing interval to prevent multiple intervals
   clearInterval(countdownInterval);

   countdownInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const distance = userDateTime - currentTime;

      // Check if the countdown is finished
      if (distance < 0) {
         clearInterval(countdownInterval);
         day.innerText = "0";
         hour.innerText = "0";
         minute.innerText = "0";
         second.innerText = "0";
         alert("Countdown finished!");
         return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      day.innerText = days;
      hour.innerText = hours;
      minute.innerText = minutes;
      second.innerText = seconds;
   }, 1000);
}
