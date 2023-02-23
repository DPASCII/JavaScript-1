"use strict";

function getFullName(firstname, surname, useFormalName, gender) {
  firstname = firstname.trim();
  surname = surname.trim();
  const fullName = `${firstname} ${surname}`;

  if (!firstname || !surname) {
    return "Invalid Input";
  }

  if (!useFormalName) {
    return fullName;
  }

  if (gender == "male") {
    return `Lord ${fullName}`;
  }

  return `Lady ${fullName}`;
}

console.log(getFullName("David", "Pascual", true, "male"));
console.log(getFullName("Carlo", "Pascual", true, "female"));
