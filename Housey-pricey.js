let volumeInMeters = 8 * 10 * 10;
let gardenSizeInM2 = 100;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
const housePeter = 2500000;

console.log("is Peter paying too much?", housePeter > housePrice);

volumeInMeters = 5 * 11 * 8;
gardenSizeInM2 = 70;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
const houseJulia = 1000000;

console.log("is Julia paying too much?", houseJulia > housePrice);
