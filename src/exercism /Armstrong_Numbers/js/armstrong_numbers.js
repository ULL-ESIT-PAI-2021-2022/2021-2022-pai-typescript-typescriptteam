'use strict';

/**
 * @param {*} number 
 * @returns 
 */
export function isArmstrongNumber(number) {
  let numberArray = number.toString().split('');
  let result = numberArray.reduce((sum, item)=> sum + Number(item)**numberArray.length, 0);
  return number === result;
};