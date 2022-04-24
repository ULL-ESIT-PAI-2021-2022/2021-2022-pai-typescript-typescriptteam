// DISCLAIMER: We don't follow any code standard here. This is just a sample.
// Names are not representative and are a single letter or alike to keep it simple and easy to read!

class Person {
  public firstName: string = undefined;
  public lastName: string = undefined;
  private age: number = undefined;
  
  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  /**
   * tsc -t es5 class_access_mod.ts
   */
  get age_(): number {
    return this.age;
  }
}

//Creamos instancia de la clase Person y modificamos los valores de los atributos publicos
  let person1: Person = new Person("Jorge", "Quintana", 22);

  person1.firstName = "Guille";
  console.log(person1.firstName);

  person1.lastName = "Zafra";
  console.log(person1.lastName);

//Intentamos hacer lo mismo con atributo privado y falla

  //person1.age = 23; //Produce un error al acceder
  //console.log(person1.age); //Produce un error al acceder

//Accedemos a traves del getter
  
  console.log(person1.age_); //Usa el getter
  //person1.age_ = 23; ////Produce un error al acceder a traves del getter