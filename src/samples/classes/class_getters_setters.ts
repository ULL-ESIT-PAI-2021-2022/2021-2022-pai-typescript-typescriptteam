// DISCLAIMER: We don't follow any code standard here. This is just a sample.
// Names are not representative and are a single letter or alike to keep it simple and easy to read!

class PersonV2 {
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

  /**
   * tsc -t es5 class_access_mod.ts
   */
  set age_(age: number) {
    this.age = age;
  }
} 

//Creamos instancia de la clase Person y modificamos los valores de los atributos publicos
  let person2: PersonV2 = new PersonV2("Jorge", "Quintana", 22);
    
  person2.firstName = "Guille";
  console.log(person2.firstName);
    
  person2.lastName = "Zafra";
  console.log(person2.lastName);

//Intentamos hacer lo mismo con atributo privado y falla
  
  //person2.age = 23; //Produce un error al acceder
  //console.log(person2.age); //Produce un error al acceder

//Accedemos a traves de los getter y los setter
  
  person2.age_ = 23; //Usa el setter de age
  console.log(person2.age_); //Usa el getter de age