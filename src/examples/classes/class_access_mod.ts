// DISCLAIMER: We don't follow any code standard here. This is just a sample.
// Names are not representative and are a single letter or alike to keep it simple and easy to read!

class Person {
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
}

//Creating an instance of Person class and modify the values of public attributes
  let person1: Person = new Person("Jorge", "Quintana", 22);

  person1.firstName = "Guille";
  console.log(person1.firstName);

  person1.lastName = "Zafra";
  console.log(person1.lastName);

//We try to do the same with private attribute

  //person1.age = 23; //Produce an error accessing
  //console.log(person1.age); //Produce an error accessing

//Access through getter
  
  console.log(person1.age_); //Using getter
  //person1.age_ = 23; //Produce an error accessing through getter