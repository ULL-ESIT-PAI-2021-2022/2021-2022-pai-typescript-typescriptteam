'use strict';

/**
 * @param {number[]} array 
 * @param {function} func 
 * @returns number[]
 */
export function keep(array, func) {
  let result = []
  for (let item of array) {
    if (func(item)) {
      result.push(item)
    };
  }
  return result;
};

/**
 * @param {number[]} array 
 * @param {function} func 
 * @returns number[]
 */
export function discard(array, func) {
  return keep(array, item => !func(item));
};