"use strict";

const class07Students = [];

function addStudentToClass(name) {
  const studentName = name.trim();

  // Catch invalid input
  if (studentName.trim() === "") {
    console.log("Invalid Input");
    return;
  }

  // Make sure no duplicate students
  if (class07Students.indexOf(studentName) >= 0) {
    console.log(`Student ${studentName} is already in the class`);
    return;
  }

  // Make sure class is not full and is not the queen
  if (class07Students > 6 && studentName !== "Queen") {
    console.log("Cannot add more students to class 07");
    return;
  }

  // push to class
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

console.log(class07Students);
console.log(getNumberOfStudents());

// const runAFunction = (aFunctionToRun) => {
//   aFunctionToRun();

//   return "It ran";
// };

// // const add2 = (x) => x + 2;
// // is equivalent to
// const add2Complicated = (x) => {
//   return x + 2;
// };

// runAFunction(() => "tangina mo");

// const foundStudentFunction =
//   class07Students.find(function (class07Students) {
//     return class07Students === studentName;
//   }) != studentName;

// const foundStudentArrowFunction =
//   class07Students.find((class07Students) => class07Students === studentName) !=
//   studentName;
