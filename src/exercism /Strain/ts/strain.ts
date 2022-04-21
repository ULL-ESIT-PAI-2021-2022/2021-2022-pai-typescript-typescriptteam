/**
 * 
 */
interface funcFormat {
  (number: number): boolean
}

/**
 * @param {*} array 
 * @param {*} func 
 * @returns 
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
 * @param {*} array 
 * @param {*} func 
 * @returns 
 */
export function discard(array: number[], func: funcFormat): number[] {
  return keep(array, item => !func(item));
};