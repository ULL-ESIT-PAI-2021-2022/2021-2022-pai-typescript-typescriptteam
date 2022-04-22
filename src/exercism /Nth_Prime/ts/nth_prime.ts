/**
 * @param {number} number 
 * @returns boolean
 */
function isPrime(number: number): boolean {
  for (let itr: number = 2; itr <= Math.sqrt(number); itr++) {
    if (number % itr === 0) {
      return false;
    }
  }
  return true;
};

/**
 * @param {number} nth 
 * @returns number 
 */
export function prime(nth: number) {
  if (nth === 0) {
    throw new Error('There is no zeroth prime');
  }
  let current: number = 1;
  let count: number = 0;
  while (count < nth) {
    current++;
    if (isPrime(current)) {
      count++;
    }
  }
  return current;
};