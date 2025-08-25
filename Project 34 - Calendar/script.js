const date=new Date();
const year = date.getFullYear();
const dateOfTheMonth=date.getDate();
const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
///dg] 0: This is a special trick. By passing 0 as the day, JavaScript interprets this as the last day of the previous month.
const totalDaysInMonth = new Date(year, date.getMonth() + 1, 0).getDate();
const firstDayOfTheMonth = new Date(year, date.getMonth(), 1).getDay();
console.log(year);
console.log(dateOfTheMonth);
console.log(monthArray[date.getMonth()]);
console.log(dayArray[date.getDay()]);
console.log(totalDaysInMonth);
console.log(dayArray[firstDayOfTheMonth]);



const month = document.querySelector(".month");
const full = document.querySelector(".full");
const footer = document.querySelector(".footer");

month.textContent = monthArray[date.getMonth()];
full.textContent = date.toDateString();

let totalDays = "";
for (let i = firstDayOfTheMonth; i > 0; i--){
   totalDays += `<div class="empty"></div>`;
}

for (let i = 1; i <= totalDaysInMonth; i++){
   if (i === date.getDate()) {
      totalDays += `<div class="date">${i}</div>`;
   } else {
      totalDays += `<div class="box">${i}</div>`;
   }
}

footer.innerHTML = totalDays;
