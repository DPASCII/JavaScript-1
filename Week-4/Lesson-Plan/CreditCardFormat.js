function formatCreditCardNumber(x) {
  //if x is not a number
  if (x != "number") {
    console.log("error");
    return;
  }

  //store integer into object
  const output = { original: x, formatted };

  //turn integer into string
  const number = x.toString();

  //format and the string
  output.formatted =
    number.split("", 4) +
    " " +
    str.slice(4, 8) +
    " " +
    str.slice(8, 12) +
    " " +
    str.slice(12);

  //return object
  return output;
}
