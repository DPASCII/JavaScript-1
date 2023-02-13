const dogYearOfBirth = 2018;
const dogYear = 7;
let dogYearFuture = 2025;
let shouldShowResultInDogYears = true;
let humanYears =
  "Your dog will be " +
  (dogYearFuture - dogYearOfBirth) +
  " human years old in " +
  dogYearFuture;
let dogYears =
  "Your dog will be " +
  (dogYearFuture - dogYearOfBirth) * 7 +
  " dog years old in " +
  dogYearFuture;

console.log((shouldShowResultInDogYears && humanYears) || dogYears);

// if (shouldShowResultInDogYears === 1) {
//   console.log(
//     "Your dog will be",
//     dogYearFuture - dogYearOfBirth,
//     "human years old in",
//     dogYearFuture
//   );
// } else {
//   console.log(
//     "Your dog will be",
//     (dogYearFuture - dogYearOfBirth) * 7,
//     "dog years old in",
//     dogYearFuture
//   );
// }
