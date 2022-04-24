// DISCLAIMER: We don't follow any code standard here. This is just a sample.
// Names are not representative and are a single letter or alike to keep it simple and easy to read!

//Empleado
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
  //Variables de la interfaz Identity
    id: 0,
    name: "Jorge",
  //Variables de la interfaz Contact
    email: "alu0101123547@ull.edu.es",
    phone: "612345678"
};

//Funcion que muestra todas las propiedades de un Empleado y su valor actual
function lookAtEmployeeTypeData(employee: Employee) {
  for (let element in employee) {
    console.log("\t-", element.toUpperCase(), "is", employee[element]);
  }
}

console.log("Employee:");
lookAtEmployeeTypeData(employee1);

//Cliente
interface BusinessPartner {
  name: string;
  credit: number;
}

type Customer = BusinessPartner & Contact;

let customer1: Customer = {
  //Variables de la interfaz BusinessPartner
    name: "Guille",
    credit: 502834714,
  //Variables de la interfaz Contact
    email: "alu0101353647@ull.edu.es",
    phone: "656789123"
};

//Funcion que muestra todas las propiedades de un Cliente y su valor actual
function lookAtCustomerTypeData(customer: Customer) {
  for (let element in customer) {
    console.log("\t-", element.toUpperCase(), "is", customer[element]);
  }
}

console.log("\nCustomer:");
lookAtCustomerTypeData(customer1);

//Varias interfaces y una misma propiedad repetida
type IdentifiedCustomer = Identity & BusinessPartner & Contact;

let identifiedCustomer1: IdentifiedCustomer = {
  //Variables de la interfaz Identity
    id: 5001,
    name: "Pepe",
  //Variables de la interfaz BusinessPartner
    //name: "Jorge", //Error porque solo lo necesita una vez
    credit: 118136168,
  //Variables de la interfaz Contact
    email: "pepe@ull.edu.es",
    phone: "678912345"
};

//Funcion que muestra todas las propiedades de un Cliente Identificado y su valor actual
function lookAtIdentifiedCustomerTypeData(customer: IdentifiedCustomer) {
  for (let element in customer) {
    console.log("\t-", element.toUpperCase(), "is", customer[element]);
  }
}

console.log("\nIdentifiedCustomer:");
lookAtIdentifiedCustomerTypeData(identifiedCustomer1);