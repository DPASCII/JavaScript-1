"use strict";
const randomNumber = Math.floor(Math.random() * 10);
const firstWords = [
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
const secondWords = [
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
const startUpName = `${firstWords[randomNumber]} ${secondWords[randomNumber]}`;

console.log(
  `The start up: "${startUpName}" contains ${startUpName.length} characters`
);
