const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(x) {
  let str = x;
if (str === '') { return '';}
let res = str[0];
let resIndex = 1;
 let newres = '';
for (let i = 1; i < str.length; i++) {
if(str[i] === res) {resIndex++}
        else{
            if(resIndex === 1) {
                newres +=  res;}
          else { newres += resIndex + res;         
         }
          str[i] !== res;
          resIndex = 1;
          res = str[i];}
}
if(resIndex === 1) {
newres +=  res;}
else{newres += resIndex + res;}
return newres;
};



module.exports = {
  encodeLine
};
