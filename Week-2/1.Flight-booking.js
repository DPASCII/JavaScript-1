"use strict";

function getFullName(firstname, surname, useFormalName, gender) {
  if (firstname.length == 0 || surname.length == 0) {
    return `Invalid Input`;
  } else if (useFormalName === true) {
    if (gender == "male") {
      return `Lord ${firstname} ${surname}`;
    } else if (gender == "female") {
      return `Lady ${firstname} ${surname}`;
    } else {
      return `${firstname} ${surname}`;
    }
  } else {
    return `${firstname} ${surname}`;
  }
}

const fullName1 = getFullName("David", "Pascual", true, "male");
const fullName2 = getFullName("Carlo", "Pascual", true, "female");

console.log(fullName1);
console.log(fullName2);
