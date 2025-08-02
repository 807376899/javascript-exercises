const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(arr) {
  sum=0;
	for(let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      throw new Error('Array must contain only numbers');
    }
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((acc, curr) => {
    if (typeof curr !== 'number') {
      throw new Error('Array must contain only numbers');
    }
    return acc * curr;
  }, 1); 

};

const power = function(a,b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return Math.pow(a, b);
};

const factorial = function(a) {
  if (typeof a !== 'number' || a < 0) {
    throw new Error('Input must be a non-negative number');
  }
  if (a === 0) return 1; // 0! = 1
  let result = 1;
  for (let i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
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
