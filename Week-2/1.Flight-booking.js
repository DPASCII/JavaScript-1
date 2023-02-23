"use strict";

function getFullName(firstname, surname, useFormalName, gender) {
  firstname = firstname.trim();
  surname = surname.trim();

  if (!firstname || !surname) {
    return "Invalid Input";
  }

  const fullName = `${firstname} ${surname}`;

  if (useFormalName === true) {
    const type = gender === "male" ? "Lord" : "Lady";
    return `${type} ${fullName}`;
  }

  return fullName;
}
console.log(getFullName("David", "Pascual", false, "male"));
console.log(getFullName("Carlo", "Pascual", true, "female"));
