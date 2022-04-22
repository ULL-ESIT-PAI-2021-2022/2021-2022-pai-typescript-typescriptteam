/**
 * @param {number} number 
 * @returns number
 */
export function steps(number: number): number {
  if (number <= 0) {
    throw Error("Only positive numbers are allowed");
  }
  let result: number = 0;
  while (number !== 1) {
    if (number % 2 === 0) {
      number = number / 2;
    } else {
      number = (number * 3) + 1;
    }
    result++;
  }
  return result;
};