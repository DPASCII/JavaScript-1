function formatCreditCardNumber(x) {
  //if x is not a number
  if (typeof x != "number") {
    console.log("error");
    return;
  }

  //turn integer into string
  const number = x.toString();

  //return object
  return {
    original: x,
    formatted:
      number.slice(0, 4) +
      " " +
      number.slice(4, 8) +
      " " +
      number.slice(8, 12) +
      " " +
      number.slice(12),
  };
}

console.log(formatCreditCardNumber(1111222233334444));
