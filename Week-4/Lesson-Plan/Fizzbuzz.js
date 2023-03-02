function fizzBuzz(x, y) {
  //Create loop to print numbers 1 to 100
  for (i = 1; i < 101; i++) {
    if ((i / x) % x === 0 && (i / y) % y === 0) {
      //Insert if both are multiples of current number to print fizzbuzz
      console.log("fizzbuzz");
      //Insert additional if statements if it is only one multiple
    } else if ((i / x) % x === 0) {
      console.log("fizz");
    } else if ((i / y) % y === 0) {
      console.log("buzz");
    }
    console.log(i);
  }
}
