// DISCLAIMER: We don't follow any code standard here. This is just a sample.
// Names are not representative and are a single letter or alike to keep it simple and easy to read!

// Primitive types
const a: number = 0;
const b: string = 'Hello';
const c: boolean = true;

// Non-primitive types
const d: number[] = [1, 2, 3];
const e: object = {};

// Type inference
const f = 0;
console.log('Type of f: ' + typeof f + '\n'); // number

// New things that JS doesn't have
let whateverYouWant: any = {};
whateverYouWant = 'Hello';
whateverYouWant = 0;

let useless: never;
// never = 0; // Error

// Tuple of string & number
let score: [string, number] = ['John', 100];
// score.push('Surname'); // Error
// score[0] = 2; // Error
// score = [0, 'John']; // Error

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  // ...
}

console.log('Months looks like:');
for (let month in Months) {
  console.log(month);
}

const februaryMonthNumber = Months.February; // 2
const februaryMonthName = Months[2]; // February

console.log('\nThe specified month is the month number ' + februaryMonthNumber + ' and the name is ' + februaryMonthName);

function echo(arg: string): string {
  return arg + ' ' + arg + '!';
}

function foo(): void {
  console.log('foo');
}

function raiseError(error: Error): never {
  throw error;
}

function add(a: number, b?: number): number {
  if (!b) {
    return a + 1;
  }
  return a + b;
}

function sustract(a: number, b: number = 1): number {
  return a - b;
}

function multiply(a: number, ...b: number[]): number {
  let result = a;
  if (b.length > 0) {
    for (let i = 0; i < b.length; i++) {
      result *= b[i];
    }
  } else {
    result *= a + 2;
  }
  return result;
}
