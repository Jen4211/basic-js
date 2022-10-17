const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let map1 = new Map();
  let map2 = new Map();
  let res = 0;
  for(i = 0; i < s1.length; i++) {
    let value = map1.get(s1[i]) + 1;
    if(map1.has(s1[i]) !== true) { 
    map1.set(s1[i], 1)}
    else {map1.set(s1[i], value)}
  }
  for(i = 0; i < s2.length; i++) {
    let value = map2.get(s2[i]) + 1;
    if(map2.has(s2[i]) !== true) { 
    map2.set(s2[i], 1)}
    else {map2.set(s2[i], value)}    
}

for(let key of map1.keys()) {
if(map2.has(key)) {
    if(map2.get(key) > map1.get(key)){
    res += map1.get(key)}
 else{ res += map2.get(key)}
}        
   
}
return res;
 }


module.exports = {
  getCommonCharacterCount
};
