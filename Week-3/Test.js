// const user = {
//   name: "Emil",
//   age: 25,
//   role: "Teacher",
//   classes: ["Javascript 1", "Javascript 2"],
//   hobbies: {
//     favourite: "computers",
//     sports: "running to class",
//   },
// };

// user.name;
// user["name"];

// const prop = "name";
// user[prop];

// user["name"] = "Maria";
// user[0] = "Hello world";

// let index = user["classes"].indexOf("Javascript 1");
// console.log(index);
// console.log(user["classes"][0]);
// const options = {
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// };
// let d = new Date();
// let ye = new Intl.DateTimeFormat("en", options).format(d);

// console.log(`${ye}`);

let strArray = ["q", "w", "w", "w", "e", "i", "u", "r"];
let findDuplicates = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) != index);

console.log(findDuplicates(strArray)); // All duplicates
console.log([...new Set(findDuplicates(strArray))]); // Unique duplicates
