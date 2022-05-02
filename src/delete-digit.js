const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let arr = String(n).split('').map(Number);
  return Math.max(...arr.map((el,i) => {
    let m = arr.slice(); 
    m.splice(i,1); 
    return Number(m.join(''));
  })
);
}
module.exports = {
  deleteDigit
};
