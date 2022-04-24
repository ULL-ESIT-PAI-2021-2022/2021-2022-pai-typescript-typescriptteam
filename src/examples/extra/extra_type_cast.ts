// DISCLAIMER: We don't follow any code standard here. This is just a sample.
// Names are not representative and are a single letter or alike to keep it simple and easy to read!

//Person interface
interface Person {
  firstName: string;
  lastName: string;
}

//Policeman interface extends from Person
interface PoliceMan extends Person {
  licensePlateNumber: number;
}

//BasketPlayer interface extends from Person
interface BasketPlayer extends Person {
  height: number;
  weight: number;
}

//Normal Person with first name and last name
  let person_1: Person = {
      firstName: "Jorge",
      lastName: "Quintana"
  };
  //person_1.age = 20; //Produce an error because the Person interface do not have age property

  console.log("Persona 1 es igual a:", person_1);

//Person that works as Police man
  let person_2: PoliceMan = person_1 as PoliceMan;
  person_2.licensePlateNumber = 505161681;

  console.log("\nPersona 2 es igual a:", person_2);

//Person that works as basketball player
  let person_3: BasketPlayer = person_1 as BasketPlayer;
  person_3.height = 185;
  person_3.weight = 75;

  console.log("\nPersona 3 es igual a:", person_3);