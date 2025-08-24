
const date = new Date();

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());

const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(monthArray[date.getMonth()]);
console.log(dayArray[date.getDay()]);


const month = document.getElementById("month");
const day = document.getElementById("day");
const date1 = document.getElementById("date");
const year = document.getElementById("year");

month.textContent = monthArray[date.getMonth()];
day.textContent = dayArray[date.getDay()];
date1.textContent = date.getDate();
year.textContent = date.getFullYear();