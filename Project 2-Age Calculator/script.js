const input = document.getElementById("dob");
const btn = document.getElementById("calculate");
const finalAge = document.getElementById("age");
const greeting = document.getElementById("greet");
const currentDate = new Date();
function Calculate() {
   if (!input.value) {
      finalAge.innerText = "Please enter your Date-of-Birth.";
      greeting.innerText = "";
      return;
   }
   const birthdayDate = new Date(input.value);
   let age = currentDate.getFullYear() - birthdayDate.getFullYear();
   let monthDifference = birthdayDate.getMonth() - currentDate.getMonth();
   if (
      monthDifference > 0 ||
      (monthDifference === 0 && birthdayDate.getDate() > currentDate.getDate())
   ) {
      age--;
   }
   finalAge.innerText = "Your Age is " + age + " years";
   greet(birthdayDate);
}
function greet(birthdayDate) {
   const currentDay = currentDate.getDate();
   const currentMonth = currentDate.getMonth();
   const birthdayDay = birthdayDate.getDate();
   const birthdayMonth = birthdayDate.getMonth();

   if (birthdayDay === currentDay && birthdayMonth === currentMonth) {
      greeting.innerText = "Happy Birthday Dear. Enjoy Your Day!";
   } else if (birthdayMonth === currentMonth) {
      if (birthdayDay > currentDay) {
         const counter = birthdayDay - currentDay;
         greeting.innerText =
            "You have " +
            counter +
            " days remaining for your birthday. Happy Birthday in advance!";
      } else {
         const counter = currentDay - birthdayDay;
         greeting.innerText =
            "Your Birthday passed " +
            counter +
            " days ago. May this year be the happiest year of your life!";
      }
   } else {
      const nextBirthday = new Date(
         currentDate.getFullYear(),
         birthdayMonth,
         birthdayDay
      );
      if (nextBirthday < currentDate) {
         nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
      }
      const timeDiff = nextBirthday - currentDate;
      const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      const monthsRemaining =
         (nextBirthday.getMonth() - currentDate.getMonth() + 12) % 12;

      greeting.innerText =
         "You have " +
         monthsRemaining +
         " months, more precisely " +
         daysRemaining +
         " days remaining for your Birthday.";
   }
}
btn.addEventListener("click", Calculate);

