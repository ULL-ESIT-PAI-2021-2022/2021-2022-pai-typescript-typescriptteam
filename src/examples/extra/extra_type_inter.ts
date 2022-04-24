// DISCLAIMER: We don't follow any code standard here. This is just a sample.
// Names are not representative and are a single letter or alike to keep it simple and easy to read!
/**
 * @see https://simondosda.github.io/posts/2021-06-17-interface-property-type.html
 */

//Employee
interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

type Employee = Identity & Contact;

let employee1: Employee = {
  //Identity interface properties
    id: 0,
    name: "Jorge",
  //Contact interface properties
    email: "alu0101123547@ull.edu.es",
    phone: "612345678"
};

//Function that shows all the properties of an employee and it is value
function lookAtEmployeeTypeData(employee: Employee) {
  let elementEmployee: keyof Employee;
  for (elementEmployee in employee) {
    console.log("\t-", elementEmployee.toUpperCase(), "is", employee[elementEmployee]);
  }
}

console.log("Employee:");
lookAtEmployeeTypeData(employee1);

//Customer
interface BusinessPartner {
  name: string;
  credit: number;
}

type Customer = BusinessPartner & Contact;

let customer1: Customer = {
  //BusinessPartner interface properties
    name: "Guille",
    credit: 502834714,
  //Contact interface properties
    email: "alu0101353647@ull.edu.es",
    phone: "656789123"
};

//Function that shows all the properties of a customer and it is value
function lookAtCustomerTypeData(customer: Customer) {
  let elementCustomer: keyof Customer;
  for (elementCustomer in customer) {
    console.log("\t-", elementCustomer.toUpperCase(), "is", customer[elementCustomer]);
  }
}

console.log("\nCustomer:");
lookAtCustomerTypeData(customer1);

//Identified Customer
type IdentifiedCustomer = Identity & BusinessPartner & Contact;

let identifiedCustomer1: IdentifiedCustomer = {
  //Identity interface properties
    id: 5001,
    name: "Pepe",
  //BusinessPartner interface properties
    //name: "Jorge", //Error because is only needed once
    credit: 118136168,
  //Contact interface properties
    email: "pepe@ull.edu.es",
    phone: "678912345"
};

//Function that shows all the properties of a identified customer and it is value
function lookAtIdentifiedCustomerTypeData(customer: IdentifiedCustomer) {
  let identifiedCostumerElement: keyof IdentifiedCustomer;
  for (identifiedCostumerElement in customer) {
    console.log("\t-", identifiedCostumerElement.toUpperCase(), "is", customer[identifiedCostumerElement]);
  }
}

console.log("\nIdentifiedCustomer:");
lookAtIdentifiedCustomerTypeData(identifiedCustomer1);