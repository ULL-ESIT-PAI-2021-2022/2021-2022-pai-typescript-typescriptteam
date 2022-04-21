/**
 * @param {string} name 
 * @returns {string} "One for you, one for me." or with the name of the person if gived
 */
export function twoFer(name: string = 'you'): string {
  return `One for ${name}, one for me.`;
};