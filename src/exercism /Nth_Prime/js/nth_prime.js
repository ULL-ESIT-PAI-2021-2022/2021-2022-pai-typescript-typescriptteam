'use strict';

/**
 * @param {number} number 
 * @returns boolean
 */
function isPrime(number) {
  for (let itr = 2; itr <= Math.sqrt(number); itr++) {
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
export function prime(nth) {
  if (nth === 0) {
    throw new Error('there is no zeroth prime');
  }
  let current = 1;
  let count = 0;
  while (count < nth) {
    current++;
    if (isPrime(current)) {
      count++;
    }
  }
  return current;
};