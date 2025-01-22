const add = function(value1, value2) {
  return(value1 + value2);
};

const subtract = function(value1, value2) {
  return(value1 - value2);
	
};

const sum = function(arr) {
  return (arr.reduce((acc, next) => {
    return(acc + next);
  }, 0))
};

const multiply = function(arr) {
  return (arr.reduce((acc, next) => {
    return(acc * next);
  }, 1))
};

const power = function(value1, value2) {
  let product = value1;
  if(value2 == 0) {
    return(1);
  }
	for(let i = 1; i < value2; i++) {
    product *= value1;
  };
  return(product);
};

const factorial = function(value) {
  if(value == 0 || value == 1) {
    return(1);
  }
  return(factorial(value - 1) * value);
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
