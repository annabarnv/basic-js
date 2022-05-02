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
  let arrCopy = n.toString().split('');
  let min;
  arrCopy.sort((a,b) => a - b);
  min = arrCopy[0];
  let arr = n.toString().split('');
  arr.splice(arr.indexOf(min), 1);
  return Number(arr.join(''));
}

module.exports = {
  deleteDigit
};
