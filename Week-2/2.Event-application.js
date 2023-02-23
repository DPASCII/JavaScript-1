"use strict";

function getEventWeekday(input) {
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
  date = date.getDay() + input;

  return day[date % 7];
}

console.log(getEventWeekday(10));
