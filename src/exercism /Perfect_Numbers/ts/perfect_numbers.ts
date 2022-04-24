/**
 * @desc Classify the value due to divisors
 * @param {number} value Value to be classified
 * @returns string defining the classification
 */
export function classify(value: number): string {
  if ((value <= 0) || (value % 1 != 0)) {
    throw new Error('Classification is only possible for natural numbers.');
  }
  let start: number = 1;
  let result: number = 0;
  while (start < value) {
    if (value % start == 0) {
      result += start;
    }
    start++;
  }
  if (result == value) {
    return 'perfect';
  } else if (result > value) {
    return 'abundant';
  } else {
    return 'deficient';
  }
};