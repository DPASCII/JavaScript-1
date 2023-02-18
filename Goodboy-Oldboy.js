"use strict";
const dogYearOfBirth = 2018;
const dogYearFuture = 2025;
const shouldShowResultInDogYears = false;
const humanYears = dogYearFuture - dogYearOfBirth;
const type = shouldShowResultInDogYears ? `dog` : `human`;
const ageDisplay = shouldShowResultInDogYears ? humanYears * 7 : humanYears;

console.log(
  `Your dog will be ${ageDisplay} ${type} years old in ${dogYearFuture}`
);
