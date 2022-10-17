const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(x) {
  let res ;
  let str = x;
  let ind = str.lastIndexOf('@');
  res = str.substr(ind + 1);
  return res;
}

module.exports = {
  getEmailDomain
};
