const randomNumber = Math.floor(Math.random() * 10);
let firstWords = [
  "Easy",
  "Awesome",
  "Amazing",
  "Undoubtful",
  "Wow",
  "Creative",
  "Mediocre",
  "Problem",
  "Black",
  "Hard-working",
];
let secondWords = [
  "Score",
  "Grace",
  "Beans",
  "Grape",
  "Self",
  "Maker",
  "Cock",
  "Ass",
  "Leader",
  "Panther",
];
startUpName = firstWords[randomNumber] + " " + secondWords[randomNumber];

console.log(
  "The startup:",
  '"',
  startUpName,
  '"',
  "contains",
  startUpName.length,
  "characters"
);
