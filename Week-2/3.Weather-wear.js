"use strict";

function clothingGuru(x) {
  if (!x) {
    return "Invalid Input";
  }

  if (x > 0 && x <= 20) {
    return "Sweater and Jeans";
  } else if (x > 20 && x <= 26) {
    return "Shirt and Jogger Pants";
  } else if (x > 26 && x <= 32) {
    return "Shirt and Shorts";
  } else if (x > 32 && x <= 38) {
    return "Sleeveless Shirt and Shorts";
  } else if (x > 38) {
    return "You best be naked cause its hell out there";
  }

  return "You gonna freeze yo' ass";
}

console.log(clothingGuru("-2323"));
