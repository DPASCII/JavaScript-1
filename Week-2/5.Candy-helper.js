"use strict";

const boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;

function canBuyMoreCandy() {
  let boughtCandy = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    boughtCandy = boughtCandy + boughtCandyPrices[i];
  }

  if (boughtCandy < amountToSpend) {
    console.log("Enough candy for you!");
    return false;
  }

  console.log("You can buy more, so please do!");
  return true;
}

function addCandy(candyType, candyWeight) {
  const flavor = ["SWEET", "CHOCOLATE", "TOFFEE", "CHEWING-GUM"];
  const candyPrice = [0.5, 0.7, 1.1, 0.03];
  candyType = candyType.toUpperCase();

  // Invalid candy weight
  if (candyWeight <= 0) {
    console.log("Invalid Input");
    return;
  }

  // Invalid candy type
  if (flavor.indexOf(candyType) < 0) {
    console.log("Invalid Input");
    return;
  }

  const boughtPrice = candyWeight * candyPrice[flavor.indexOf(candyType)];

  if (canBuyMoreCandy()) {
    boughtCandyPrices.push(boughtPrice);
  }
}

addCandy("TOFFEE", 8);
addCandy("CHOCOLATE", 5);
addCandy("chewing-gum", 2);
addCandy("sweet", 3);
addCandy("sweet", 6);
canBuyMoreCandy();
