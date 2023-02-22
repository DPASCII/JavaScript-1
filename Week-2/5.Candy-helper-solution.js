"use strict";

const boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;

function canBuyMoreCandy() {
  let boughtCandy = 0;

  for (let i = 0; i < boughtCandyPrices.length; i++) {
    boughtCandy = boughtCandy + boughtCandyPrices[i];
  }

  if (boughtCandy > amountToSpend) {
    console.log("Enough candy for you!");
    return false;
  }

  console.log("You can buy more, so please do!");
  return true;
}

function addCandy(type, candyWeight) {
  const candyType = type.toUpperCase().trim();

  if (candyWeight <= 0) {
    console.log("Invalid Input");
    return;
  }

  const candyTypes = ["SWEET", "CHOCOLATE", "TOFFEE", "CHEWING-GUM"];
  const candyWeights = [0.5, 0.7, 1.1, 0.03];

  const index = candyTypes.indexOf(candyType);

  if (index < 0) {
    // candy type is invalid
    console.log("Invalid Input");
    return;
  }

  const candyPrice = candyWeight * candyWeights[index];

  // check if you can actually buy the candy
  if (canBuyMoreCandy()) {
    // buy candy
    boughtCandyPrices.push(candyPrice);
  }
}

addCandy("toFfee", 8);
addCandy("Chocolate", 5);
addCandy("chewing-gum", 2);
addCandy("sweet", 3);
addCandy("sweet", 6);
console.log(boughtCandy);
canBuyMoreCandy();
console.log(boughtCandy);
console.log(amountToSpend);
