'use strict';

/**
 * @param {string} str 
 * @returns boolean
 */
export function isValid(str) {
  let arr = str.split("-").join("").split("");

	if (arr.length != 10) {
    return false;
  }

	if (arr[9] == "X") {
    arr[9] = 10;
  }

  let value = arr.reduce((result, element, iter) => result + element * (10 - iter), 0);

	return (value % 11 === 0);
};