// DISCLAIMER: We don't follow any code standard here. This is just a sample.
// Names are not representative and are a single letter or alike to keep it simple and easy to read!

//Random number from array of numbers
  function getRandomNumberElement(items: number[]): number {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }

  let numbers1: number[] = [1, 5, 7, 4, 2, 9];
  console.log("Random number from the number array:", getRandomNumberElement(numbers1));

//Random string from array of string
  function getRandomStringElement(items: string[]): string {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }

  let colors1: string[] = ['red', 'green', 'blue'];
  console.log("\nRandom string from the string array:", getRandomStringElement(colors1));

//Random element from array of elements using GENERICS
  function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }

  let numbers2: number[] = [1, 5, 7, 4, 2, 9];
  console.log("\nRandom element from the array:", getRandomElement<number>(numbers2));
  console.log("Random element with inferred type from the element array:", getRandomElement(numbers2));

  let colors2: string[] = ['red', 'green', 'blue'];
  console.log("\nRandom element from the array:", getRandomElement<string>(colors2));
  console.log("Random element with inferred type from the element array:", getRandomElement(colors2));