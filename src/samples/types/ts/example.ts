function testTS() {
  //Checking the unknown type of this variables
  console.log('You can see all of them have a different type:\n');
  let unknown;
  let unknown2: any;
  let num: number;
  let str: string;
  let bool: boolean;
  let numbersArray: number[];
  let tuple: [number, string];
  let union: (number | string);
  let inaccessible: never;

  console.log(typeof(unknown));
  console.log(typeof(unknown2));
  console.log(typeof(num));
  console.log(typeof(str));
  console.log(typeof(bool));
  console.log(typeof(numbersArray));
  console.log(typeof(tuple));
  console.log(typeof(union));
  console.log(typeof(inaccessible));

  //Checking functions
  console.log('You can see that when the variable is already defined, it shows the only one type:\n');
  let obj: {num: number, str: string};

  console.log(typeof(obj));

  function hi(name: string): void {
      console.log(`Hello, ${name}!`);
  }

  let sayHiTo: (x: string) => void;
  console.log(typeof(sayHiTo));
  sayHiTo = hi;
  console.log(typeof(sayHiTo));
  console.log(sayHiTo("Sande"));

  /*This next line produces an error*/
  //num = 'hola';
}

testTS();