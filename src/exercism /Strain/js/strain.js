'use strict';

/**
 * @param {*} array 
 * @param {*} func 
 * @returns 
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
 * @param {*} array 
 * @param {*} func 
 * @returns 
 */
export function discard(array, func) {
  return keep(array, item => !func(item));
};