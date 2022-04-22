'use strict';

function testJS() {
  //Checking the unknown type of this variables
  console.log('You can see all of them are the same type:\n');
  let unknown;
  let num;
  let str;
  let bool;
  let numbersArray;
  let tuple;
  let union;
  let inaccessible;

  console.log(typeof(unknown));
  console.log(typeof(num));
  console.log(typeof(str));
  console.log(typeof(bool));
  console.log(typeof(numbersArray));
  console.log(typeof(tuple));
  console.log(typeof(union));
  console.log(typeof(inaccessible));

  //Checking functions
  console.log('You can see that when it is not initialized the variable type is unknown:\n');
  
  let obj;
  console.log(typeof(obj));

  function hello(name) {
    console.log(`Hello, ${name}!`);
  }

  let sayHiTo;
  console.log(typeof(sayHiTo));
  sayHiTo = hello;
  console.log(typeof(sayHiTo));
  console.log(sayHiTo("Sande"));
  console.log(sayHiTo(1));

  //Checking it works fine
  console.log('\nYou can set diferent type of value to the same variable');
  num = 2;
  console.log('num= ' + num + ' y es de tipo: ' + typeof(num));
  num = 'hola';
  console.log('num= ' + num + ' y es de tipo: ' + typeof(num));
}

testJS();