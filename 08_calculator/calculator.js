const add = function(value1, value2) {
  return(value1 + value2);
};

const subtract = function(value1, value2) {
  return(value1 - value2);
	
};

const sum = function(arr) {
  let sum = 0;
  if(arr.length == 0) {
    return(0);
  }
	for(let item of arr) {
    sum += item;
  };
  return(sum);
};

const multiply = function(arr) {
  let mutiple = 1;
  if(arr.length == 0) {
    return(0);
  }
	for(let item of arr) {
    mutiple *= item;
  };
  return(mutiple);
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
