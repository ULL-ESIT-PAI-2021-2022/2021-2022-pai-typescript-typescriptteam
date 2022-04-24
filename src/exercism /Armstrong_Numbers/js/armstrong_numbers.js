'use strict';

/**
 * @desc Checks if the gived number is an armstrong number
 * @param {number} number Number to be checked
 * @returns boolean true if it is, false if it is not
 */
export function isArmstrongNumber(number) {
  let numberArray = number.toString().split('');
  let result = numberArray.reduce((sum, item)=> sum + Number(item)**numberArray.length, 0);
  return number === result;
};