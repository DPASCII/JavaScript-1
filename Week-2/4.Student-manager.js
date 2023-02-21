"use strict";

const class07Students = [];
function addStudentToClass(studentName) {
  if (studentName.trim() != "") {
    if (
      class07Students.find(
        function (class07Students) {
          return class07Students === studentName;
        }
        //(class07Students) => class07Students === studentName (Found this can pls explain haha)
      ) != studentName
    ) {
      if (studentName == "Queen") {
        class07Students.push(studentName.trim());
      } else if (class07Students.length <= 5) {
        class07Students.push(studentName.trim());
      } else {
        console.log("Cannot add more students to class 07");
      }
    } else {
      console.log(`Student ${studentName.trim()} is already in the class`);
    }
  } else {
    console.log("Invalid Input");
  }
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
