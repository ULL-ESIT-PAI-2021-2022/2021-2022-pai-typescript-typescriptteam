"use strict";
exports.__esModule = true;
exports.steps = void 0;
/**
 * @desc Give the number of steps to number be 1
 * @param {number} number Number of steps to be done
 * @returns number of steps
 */
function steps(number) {
    if (number <= 0) {
        throw Error("Only positive numbers are allowed");
    }
    var result = 0;
    while (number !== 1) {
        if (number % 2 === 0) {
            number = number / 2;
        }
        else {
            number = (number * 3) + 1;
        }
        result++;
    }
    return result;
}
exports.steps = steps;
;
