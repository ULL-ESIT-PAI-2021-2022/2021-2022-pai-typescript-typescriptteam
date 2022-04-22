function testTS(): void {
  //Checking the unknown type of this variables. You must set each variable to something in order to typeof it.
  console.log('You can see all of them have a different type:\n');
  let unknown = undefined;
  let unknown2: any;
  let num: number = 0;
  let str: string = 'example';
  let bool: boolean = true;
  let numbersArray: number[] = [1,2,3];
  let tuple: [number, string] = [1, 'example'];
  let union: (number | string) = 1;
  let inaccessible: never;

  console.log(typeof(unknown));
  console.log(typeof(unknown2));
  console.log(typeof(num));
  console.log(typeof(str));
  console.log(typeof(bool));
  console.log(typeof(numbersArray));
  console.log(typeof(tuple));
  console.log(typeof(union));
  //console.log(typeof(inaccessible)); you can't output a never type.

  //Checking functions and objects
  console.log('Functions and objects:\n');
  let obj: {num: number, str: string} = {num: 1, str: 'example'};

  console.log(typeof(obj));

  function hello(name: string): void {
      console.log(`Hello, ${name}!`);
  }

  let sayHiTo: (x: string) => void;
  sayHiTo = hello;
  console.log(typeof(sayHiTo));
  console.log(sayHiTo("Sande"));

  let inferedA = 1;
  let inferedString = 'String';

  console.log(`Type of inferedA: ${typeof inferedA}`);
  console.log(`Type of inferedString: ${typeof inferedString}`);

  let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
  } = {
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      jobTitle: 'Web Developer'
  };

  console.log(employee.firstName);
  console.log(employee.firstName + ' ' + employee.lastName);

  /*This next line produces an error*/
  //num = 'hola';
}

testTS();