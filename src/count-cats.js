const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(x) {
  let res = [];
let cat ='^^';
let cats = x.flat(Infinity);
let ind = cats.indexOf(cat);
while(ind != -1) {
res.push(ind);
ind = cats.indexOf(cat, ind + 1);
}
return res.length;
}

module.exports = {
  countCats
};
