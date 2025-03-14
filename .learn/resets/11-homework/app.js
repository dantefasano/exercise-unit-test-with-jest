// We declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function (valueInDollar) {
  // Convert the given valueInDollar to yens
  let valueInYen = valueInDollar * 146.261682;
  // return the yen value
  return valueInYen;
};

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
  // Convert the given valueInEuro to dollars
  let valueInDollar = valueInEuro * 1.07;
  // return the dollar value
  return valueInDollar;
};

// This is my function that sums two numbers
const sum = (a, b) => {
  return a + b;
};

// Just a console log for ourselves
console.log(sum(7, 3));

// Export the function to be used on other files
// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromDollarToYen, fromEuroToDollar };
