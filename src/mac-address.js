const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address( n ) {
  let strAddres = n.split('-');
  if(strAddres.length !== 6) {
    return false;
  }
  let areElementsTwoDigits = strAddres.some(elem => elem.length !== 2);
  if(areElementsTwoDigits) {
    return false;
  }
  let result = strAddres.some(elem => {
    let num = parseInt(elem, 16);
    return isNaN(num);
});
  if(result) {
    return false;
  }
  return true;
}
module.exports = {
  isMAC48Address
};
