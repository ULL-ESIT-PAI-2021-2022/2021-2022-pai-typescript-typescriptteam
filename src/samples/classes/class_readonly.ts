// DISCLAIMER: We don't follow any code standard here. This is just a sample.
// Names are not representative and are a single letter or alike to keep it simple and easy to read!

class PersonV3 {
  public firstName: string = undefined;
  public lastName: string = undefined;
  private age: number = undefined;
  readonly dni: number = undefined;
    
  constructor(firstName: string, lastName: string, age: number, dni: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.dni = dni;
  }
  
  /**
   * tsc -t es5 class_access_mod.ts
   */
  get age_(): number {
    return this.age;
  }

  /**
   * tsc -t es5 class_access_mod.ts
   */
  set age_(age: number) {
    this.age = age;
  }

  /**
   * tsc -t es5 class_access_mod.ts
   */
  get dni_(): number {
    return this.dni;
  }

  /*
  set dni_(dni: number) {
    this.dni = dni;
  }*/
}

//Creamos instancia de la clase Person y modificamos los valores de los atributos publicos
  let person3: PersonV3 = new PersonV3("Jorge", "Quintana", 22, 43465921);
    
  person3.firstName = "Guille";
  console.log(person3.firstName);
    
  person3.lastName = "Zafra";
  console.log(person3.lastName);

//Intentamos hacer lo mismo con atributo privado y falla
  
  //person3.age = 23; //Produce un error al acceder
  //console.log(person3.age); //Produce un error al acceder

//Accedemos a traves de los getter y los setter
  
  console.log(person3.age_); //Usa el getter de age

  //person3.dni = 23; //Produce un error al modificar
  //person3.dni_ = 23; //Produce un error al modificar porque no puedes definir el setter de una variable readOnly
  console.log(person3.dni); //No produce error al leer