/**
 * Interface made to specify the 'form' of the function
 */
interface funcFormat {
  (number: number): boolean
}

/**
 * @desc Function that returns the elements that passes the filter func
 * @param {number[]} array Numbers to be parsed
 * @param {function} func Function to filter
 * @returns number[] with the filtered numbers
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
 * @desc Function that returns the elements that didnt passes the filter func
 * @param {number[]} array Numbers to be parsed
 * @param {function} func Function to filter
 * @returns number[] with the filtered numbers
 */
export function discard(array: number[], func: funcFormat): number[] {
  return keep(array, item => !func(item));
};