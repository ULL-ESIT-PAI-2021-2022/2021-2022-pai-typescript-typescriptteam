/**
 * @param {number} number 
 * @returns boolean
 */
export function isArmstrongNumber(number: number): boolean {
  let numberArray: string[] = number.toString().split('');
  let result: number = numberArray.reduce((sum, item)=> sum + Number(item)**numberArray.length, 0);
  return number === result;
};