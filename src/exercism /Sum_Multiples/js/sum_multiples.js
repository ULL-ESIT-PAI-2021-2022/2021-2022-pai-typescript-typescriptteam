'use strict';

/**
 * @param divisors 
 * @param limit 
 * @returns 
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