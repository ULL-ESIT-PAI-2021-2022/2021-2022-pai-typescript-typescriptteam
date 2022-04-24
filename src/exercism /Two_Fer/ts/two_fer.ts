/**
 * @desc Give an string telling "One for you, one for me." or with the name of the person if gived
 * @param {string} name Name of the person or 'you' if nothing gived
 * @returns {string} "One for you, one for me." or with the name of the person if gived
 */
export function twoFer(name: string = 'you'): string {
  return `One for ${name}, one for me.`;
};