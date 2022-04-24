'use strict';

/**
 * @desc Function that returns the elements that passes the filter func
 * @param {number[]} array Numbers to be parsed
 * @param {function} func Function to filter
 * @returns number[] with the filtered numbers
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
 * @desc Function that returns the elements that didnt passes the filter func
 * @param {number[]} array Numbers to be parsed
 * @param {function} func Function to filter
 * @returns number[] with the filtered numbers
 */
export function discard(array, func) {
  return keep(array, item => !func(item));
};