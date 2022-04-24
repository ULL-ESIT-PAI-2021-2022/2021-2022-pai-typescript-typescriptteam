/**
 * @desc Checks if a number is prime
 * @param {number} number Number to be checked
 * @returns boolean True if it is, false if not
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
 * @desc Give the nth prime number
 * @param {number} nth The position of that number
 * @returns The number
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