// DISCLAIMER: We don't follow any code standard here. This is just a sample.
// Names are not representative and are a single letter or alike to keep it simple and easy to read!

//Interfaz Persona
interface Person {
  firstName: string;
  lastName: string;
}

//Interfaz Policia que hereda de Persona
interface PoliceMan extends Person {
  licensePlateNumber: number;
}

//Interfaz Jugador de Baloncesto que hereda de Persona
interface BasketPlayer extends Person {
  height: number;
  weight: number;
}

//Persona normal con nombre y apellidos
  let person_1: Person = {
      firstName: "Jorge",
      lastName: "Quintana"
  };
  //person_1.age = 20; //Produce un error porque la interfaz Person no tiene una propiedad llamada age

  console.log("Persona 1 es igual a:", person_1);

//Persona que trabaja como policia
  let person_2: PoliceMan = person_1 as PoliceMan;
  person_2.licensePlateNumber = 505161681;

  console.log("\nPersona 2 es igual a:", person_2);

//Persona que trabaja como jugador de baloncesto
  let person_3: BasketPlayer = person_1 as BasketPlayer;
  person_3.height = 185;
  person_3.weight = 75;

  console.log("\nPersona 3 es igual a:", person_3);