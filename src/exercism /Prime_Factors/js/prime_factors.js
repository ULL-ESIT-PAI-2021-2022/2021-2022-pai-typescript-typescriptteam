'use strict';

/**
 * @param {number} number 
 * @returns number[]
 */
export function primeFactors(number) {
  let primeFactorsOfNum = [];
  let divisor = 2;
  if (number === 1) return primeFactorsOfNum;
  while (number > 1) {
    if (number % divisor === 0) {
      primeFactorsOfNum.push(divisor);
      number = number / divisor;
    } else {
      divisor++;
    }
  }
  return primeFactorsOfNum;
};