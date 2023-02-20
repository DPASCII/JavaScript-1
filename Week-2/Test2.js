// // Creation
// let todoItem = "Buy Groceries";
// console.log(todoItem);

// // Create the function
// function checkItem() {
//   return todoItem + " - done";
// }

// // use the function by calling it using ()
// // If we dont call the function that code will NEVER EVER IN A MILLION YEARS run!
// checkItem();
// checkItem();
// checkItem();
// checkItem();
// checkItem();
// console.log(checkItem());
// console.log(todoItem);

// // Calling a method on something
// let s = " this is a string  ";
// // calling a function (trim) on the string s
// s.trim(); // -> "this is a string"
// console.log(s.trim().length);
// const userRole = "guest";
// function isAuthenticated(userRole) {
//   // userRole here is different from `var userRole`
//   const isAdmin = userRole === "admin";
//   const isLoggedIn = userRole !== "guest";

//   if (isAdmin) {
//     return true; // if this is run, all other code after is ignored inside the function
//   } else if (isLoggedIn) {
//     return true;
//   }

//   return false;
// }

// console.log(userRole);
// console.log(isAuthenticated(userRole));
// console.log(isAuthenticated("admin"));
// console.log(isAuthenticated(userRole));

const globalScopeVariable = "globalScopeVariable";
function outerFunction() {
  // function scope A
  console.log(globalScopeVariable);
  const outerFunctionScope = "outerFunctionScope";

  function innerFunction() {
    // Function scope B
    console.log(globalScopeVariable);
    console.log(outerFunctionScope);

    const innerFunctionScope = "innerFunctionScope";
    console.log(innerFunctionScope);
  }

  innerFunction();
}

outerFunction();
