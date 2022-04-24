// DISCLAIMER: We don't follow any code standard here. This is just a sample.
// Names are not representative and are a single letter or alike to keep it simple and easy to read!

//Creating a type that is string and number
type alphanumeric = string | number;

//Function that make the sum of two numbers or the concatenation of two strings
function add(a: alphanumeric, b: alphanumeric): alphanumeric {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
  }

  throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}

//Sum of two numbers
  let a: alphanumeric = 1;
  let b: alphanumeric = 2;

  console.log("The addition of two alphanumeric variables when given a number is:", add(a, b));

//Concatenation of two strings
  a = "He";
  b = "llo";

  console.log("The addition of two alphanumeric variables when given a string is:", add(a, b));

//Producing an error
  a = "He";
  b = 2;

  console.log("The addition of two alphanumeric variables when given a number to one and a string to the other is:", add(a, b));