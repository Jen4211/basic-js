const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(x) {
  if(!Array.isArray(x)) {return false;}
let resArr = x.map(elem => {
  if(typeof elem !== 'string') {
    return "";
  }
  return elem.length === 0 ? "" : elem.trim()[0].toUpperCase();
});
 let res = resArr.sort().join('');
 return res.length === 0 ? false : res;
}

module.exports = {
  createDreamTeam
};
