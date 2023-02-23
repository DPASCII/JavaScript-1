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

function getEventWeekday(input) {
  let date = new Date();
  date = date.getDay() + input;

  return date % 7;
}

console.log(day[getEventWeekday(10)]);
