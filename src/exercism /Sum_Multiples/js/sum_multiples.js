'use strict';

/**
 * @desc Give the sum of multiples into an array from index 0 to limit
 * @param {number[]} divisors Array of numbers that are divisors
 * @param {number} limit Limit to check
 * @returns number that is the sum of the multiples
 */
export function sum(divisors, limit) {
  return divisors.reduce((result, divisor) => {
      for (let i = 1; i < limit; i++) {
        if ((i % divisor === 0) && (!result.includes(i))) {
          result.push(i);
        }
      }
      return result;
    }, []).reduce((result, i) => result + i, 0);
};