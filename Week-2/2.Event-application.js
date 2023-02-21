"use strict";

const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let date = new Date();
let eventDate = 0;
function getEventWeekday(input) {
  date = date.getDay() + input;
  eventDate = date % 7;
}

getEventWeekday(10);
console.log(day[eventDate]);
