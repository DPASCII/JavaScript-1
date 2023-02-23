"use strict";

const class07Students = [];

function addStudentToClass(name) {
  const studentName = name.trim();
  // invalid inputs
  if (!studentName) {
    console.log("Invalid Input");
    return;
  }

  // duplicate students
  if (class07Students.indexOf(studentName) >= 0) {
    console.log(`Student ${studentName} is already in the class`);
    return;
  }

  //if class if full
  if (class07Students.length > 6 && studentName != "queen") {
    console.log("Cannot add more students to class 07");
    return;
  }

  class07Students.push(studentName);
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass(" Carlo ");
addStudentToClass("Carlo");
addStudentToClass("Darren");
addStudentToClass("Joseph");
addStudentToClass("Cars");
addStudentToClass("Kai");
addStudentToClass("Gabriel");
addStudentToClass("Queen");
addStudentToClass("");
addStudentToClass("Darresn");

console.log(class07Students);
console.log(getNumberOfStudents());
