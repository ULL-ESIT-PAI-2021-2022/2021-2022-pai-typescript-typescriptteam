/**
 * Interface made to specify the 'form' of the function
 */
interface funcFormat {
  (number: number): boolean
}

/**
 * @param {number[]} array 
 * @param {function} func 
 * @returns number[]
 */
export function keep(array: number[], func: funcFormat): number[] {
  let result: number[] = []
  for (let item of array) {
    if (func(item)) {
      result.push(item)
    };
  }
  return result;
};

/**
 * @param {number[]} array 
 * @param {function} func 
 * @returns number[]
 */
export function discard(array: number[], func: funcFormat): number[] {
  return keep(array, item => !func(item));
};