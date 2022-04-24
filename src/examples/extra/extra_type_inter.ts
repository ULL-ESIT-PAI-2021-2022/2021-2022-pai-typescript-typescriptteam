// DISCLAIMER: We don't follow any code standard here. This is just a sample.
// Names are not representative and are a single letter or alike to keep it simple and easy to read!

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
  for (let element in employee) {
    console.log("\t-", element.toUpperCase(), "is", employee[element]);
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
  for (let element in customer) {
    console.log("\t-", element.toUpperCase(), "is", customer[element]);
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
  for (let element in customer) {
    console.log("\t-", element.toUpperCase(), "is", customer[element]);
  }
}

console.log("\nIdentifiedCustomer:");
lookAtIdentifiedCustomerTypeData(identifiedCustomer1);