// DISCLAIMER: We don't follow any code standard here. This is just a sample.
// Names are not representative and are a single letter or alike to keep it simple and easy to read!

class PersonV3 {
  public firstName: string;
  public lastName: string;
  private age: number;
  readonly dni: number;

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
  * This won't work as it's readonly!
  set dni_(dni: number) {
    this.dni = dni;
  }*/
}

//Creating an instance of Person class and modify the values of public attributes
  let person3: PersonV3 = new PersonV3("Jorge", "Quintana", 22, 43465921);

  person3.firstName = "Guille";
  console.log(person3.firstName);

  person3.lastName = "Zafra";
  console.log(person3.lastName);

///We try to do the same with private attribute
  
  //person3.age = 23; //Produce an error accessing
  //console.log(person3.age); //Produce an error accessing

//Access through getter and setter
  
  console.log(person3.age_); //Using age getter

  //person3.dni = 23; //Produce an error modifying
  //person3.dni_ = 23; //Produce an error modifying because you can not define the setter of a readOnly variable
  console.log(person3.dni); //No errors

