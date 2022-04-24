// DISCLAIMER: We don't follow any code standard here. This is just a sample.
// Names are not representative and are a single letter or alike to keep it simple and easy to read!

//Numero aleatorio procediente de un array de numeros
  function getRandomNumberElement(items: number[]): number {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }

  let numbers1: number[] = [1, 5, 7, 4, 2, 9];
  console.log("Elemento aleatorio del array de numeros:", getRandomNumberElement(numbers1));

//String aleatorio procediente de un array de string
  function getRandomStringElement(items: string[]): string {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }

  let colors1: string[] = ['red', 'green', 'blue'];
  console.log("\nElemento aleatorio del array de strings:", getRandomStringElement(colors1));

//Elemento aleatorio procediente de un array de elementos usando GENERICS
  function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }

  let numbers2: number[] = [1, 5, 7, 4, 2, 9];
  console.log("\nElemento aleatorio del array de elementos:", getRandomElement<number>(numbers2));
  console.log("Elemento aleatorio con tipo inferido del array de elementos:", getRandomElement(numbers2));

  let colors2: string[] = ['red', 'green', 'blue'];
  console.log("\nElemento aleatorio del array de elementos:", getRandomElement<string>(colors2));
  console.log("Elemento aleatorio con tipo inferido del array de elementos:", getRandomElement(colors2));