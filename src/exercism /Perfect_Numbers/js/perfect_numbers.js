'use strict';

/**
 * @param {number} value 
 * @returns 
 */
export function classify(value) {
  if ((value <= 0) || (value % 1 != 0)) {
    throw new Error('Classification is only possible for natural numbers.');
  }
  let start = 1;
  let result = 0;
  while (start < value) {
    if (value % start == 0) {
      result += start;
    }
    start++;
  }
  if (result == value) {
    return "perfect";
  } else if (result > value) {
    return "abundant";
  } else {
    return "deficient";
  }
};