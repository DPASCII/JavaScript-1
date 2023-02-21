"use strict";

const boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;
let boughtCandy = 0;
function addCandy(candyType, candyWeight) {
  if (candyWeight > 0) {
    if (candyType.toUpperCase().trim() == "SWEET") {
      boughtCandyPrices.push(candyWeight * 0.5);
    } else if (candyType.toUpperCase().trim() == "CHOCOLATE") {
      boughtCandyPrices.push(candyWeight * 0.7);
    } else if (candyType.toUpperCase().trim() == "TOFFEE") {
      boughtCandyPrices.push(candyWeight * 1.1);
    } else if (candyType.toUpperCase().trim() == "CHEWING-GUM") {
      boughtCandyPrices.push(candyWeight * 0.03);
    } else {
      console.log("Invalid Input");
    }
  } else {
    console.log("Invalid Input");
  }
  boughtCandy = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    boughtCandy = boughtCandy + boughtCandyPrices[i];
  }
  if (boughtCandy > amountToSpend) {
    console.log("Enough candy for you!");
  }
}

function canBuyMoreCandy() {
  boughtCandy = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    boughtCandy = boughtCandy + boughtCandyPrices[i];
  }

  if (boughtCandy < amountToSpend) {
    console.log("You can buy more, so please do!");
  } else {
    console.log("Enough candy for you!");
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
