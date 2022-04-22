/**
 * @param {number[]} divisors 
 * @param {number} limit 
 * @returns number
 */
export function sum(divisors: number[], limit: number): number {
  return divisors.reduce((result: number[], divisor: number) => {
      for (let i = 1; i < limit; i++) {
        if ((i % divisor === 0) && (!result.includes(i))) {
          result.push(i);
        }
      }
      return result;
    }, []).reduce((result, i) => result + i, 0);
};