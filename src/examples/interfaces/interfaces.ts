// DISCLAIMER: We don't follow any code standard here. This is just a sample.

// Basic usage. A simple interface used by functions.
interface Person {
  ssn: number;
  name: string;
  working: boolean;
  salary?: number;
}

let john : Person = {
  ssn: 123456789,
  name: 'John',
  working: true,
  salary: 1
};

let guillermoZafra : Person = {
  ssn: 69696969,
  name: 'Guillermo Zafra',
  working: false
};

function raiseSalary(person: Person, amount: number): void {
  if (person.salary) {
    person.salary += amount;
  }
}

function readablePerson(person: Person) {
  return `${person.name} has a salary of ${person.salary}`;
}

console.log(readablePerson(john));
raiseSalary(john, 1000);
console.log(readablePerson(john) + ', after a raise');
raiseSalary(guillermoZafra, 1000);
console.log(readablePerson(guillermoZafra));

////////////////////////////////////////////////////////

// An interface that extends another

interface Transport {
  brand: string;
  peopleItCanHold: number;
}

interface Bus extends Transport {
  publicTransport: boolean;
  amountWheels: number;
}

let titsaBus: Bus = {
  brand: 'Toyota',
  peopleItCanHold: 9999,
  publicTransport: true,
  amountWheels: 4
};

console.log(`\nThis bus of the ${titsaBus.brand} brand has ${titsaBus.peopleItCanHold} ` +
  `people it can hold and runs on ${titsaBus.amountWheels} wheels.`);

////////////////////////////////////////////////////////////

// An interface extends a class

class Control {
  private state: any;
}
interface ActivatableControl extends Control {
  activate(): void;
}
class Button extends Control implements ActivatableControl {
  activate() { }
}
// Implicitly implements ActivatableControl since it
// matches the interface and extends Control.
class TextBox extends Control {
  activate() { }
}
class Label extends Control {
}

// Error - cannot implement ActivatableControl because it isn't a Control
/*
class Dishwasher implements ActivatableControl {
  activate() { }
}
*/

// Error - this won't work either. 
// ActivatableControl extends Control, and therefore contains state as a private member.
// Only descendants of Control can implement ActivatableControl.
/*
class Microwave implements ActivatableControl {
  private state: any;
  activate() { }
}
*/
