"use strict";
let volumeInMeters = 8 * 10 * 10;
let gardenSizeInM2 = 100;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
const housePeter = 2500000;
let priceComparison = housePeter > housePrice ? `over` : `under`;
let buyer = "Peter";

console.log(`${buyer} is ${priceComparison}paying for the house`);

volumeInMeters = 5 * 11 * 8;
gardenSizeInM2 = 70;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
const houseJulia = 1000000;
priceComparison = houseJulia > housePrice ? `over` : `under`;
buyer = "Julia";

console.log(`${buyer} is ${priceComparison}paying for the house`);
