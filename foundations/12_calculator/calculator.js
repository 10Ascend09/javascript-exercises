const add = function(number1, number2) {
	return number1 + number2
};

const subtract = function(number1, number2) {
  return number1 - number2
};

const sum = function(listOfNumbers) {
  return listOfNumbers.reduce((accumulator, item) => accumulator += item,0)
};

const multiply = function(listOfNumbers) {
  return listOfNumbers.reduce((accumulator, item) => accumulator*= item ,1)
};

const power = function(base, exponent) {
	return base ** exponent
};

const factorial = function(number) {
  let numberFactorised = 1;
  for (let i = 1; i <= number; i++) {
    numberFactorised *= i;
  }
  return numberFactorised
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
