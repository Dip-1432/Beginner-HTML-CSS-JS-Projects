const date=new Date();
// console.log(date);
/*
Method	             Description
getFullYear()         Get year as a four digit number (yyyy)
getMonth()	          Get month as a number (0-11)....Jan as 0, Dec as 11
getDate()	          Get day as a number (1-31)
getDay()	             Get weekday as a number (0-6)....Sunday as 0, Saturday as 6
getHours()	          Get hour (0-23)
getMinutes()	       Get minute (0-59)
getSeconds()	       Get second (0-59)
getMilliseconds()	    Get millisecond (0-999)
getTime()	          Get time (milliseconds since January 1, 1970)
*/
console.log("Year:", date.getFullYear());
console.log("Month:", date.getMonth());
console.log("Date:",date.getDate());
console.log("Day:",date.getDay());
console.log("Hours:",date.getHours());
console.log("Minutes:",date.getMinutes());
console.log("Seconds: ", date.getSeconds());
console.log("Milliseconds: ", date.getMilliseconds());
console.log("Time: ", date.getTime());

/*
There are 9 ways to create a new date object:

new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
*/

