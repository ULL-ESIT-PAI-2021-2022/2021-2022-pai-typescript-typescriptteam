// DISCLAIMER: We don't follow any code standard here. This is just a sample.
// Names are not representative and are a single letter or alike to keep it simple and easy to read!

//Creamos un tipo que pueda ser tanto string como number
type alphanumeric = string | number;

//Funcion que suma o concatena los parametros de entrada dependiendo de si son strings o numbers
function add(a: alphanumeric, b: alphanumeric) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
  }
 
  throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}

//Sumando dos numeros
  let a: alphanumeric = 1;
  let b: alphanumeric = 2;

  console.log("La suma de dos variables alfanumericas asignandoles un numero da:", add(a, b));

//Concatenando dos cadenas
  a = "He";
  b = "llo";

  console.log("La suma de dos variables alfanumericas asignandoles una string da:", add(a, b));

//Produciendo un error
  a = "He";
  b = 2;

  console.log("La suma de dos variables alfanumericas asignandoles a una string y a otra un numero:", add(a, b));