// DISCLAIMER: We don't follow any code standard here. This is just a sample.
// Names are not representative and are a single letter or alike to keep it simple and easy to read!

class PersonV2 {
  public firstName: string;
  public lastName: string;
  private age: number;
    
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

//Creating an instance of Person class and modify the values of public attributes
  let person2: PersonV2 = new PersonV2("Jorge", "Quintana", 22);
    
  person2.firstName = "Guille";
  console.log(person2.firstName);
    
  person2.lastName = "Zafra";
  console.log(person2.lastName);

//We try to do the same with private attribute
  
  //person2.age = 23; //Produce an error accessing
  //console.log(person2.age); //Produce an error accessing

//Access through getter and setter
  
  person2.age_ = 23; //Using the setter
  console.log(person2.age_); //Using the getter