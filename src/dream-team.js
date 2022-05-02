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
 function createDreamTeam(members) {
  let encodedArr = [];
   if (members === []) {
     return false;
   }
   if (Array.isArray(members)) {
    members.map(elem => {
    if(typeof elem === 'string') {
      let i = 0;
      while(true) {
        if(elem[i] !== ' ') {
          encodedArr.push(elem[i].toUpperCase());
          break;
        } i++;
      } 
   } else if(typeof elem !== 'string') {
     return false;
   }
  })
  }return encodedArr.sort().join(''); 
  return false;
};

module.exports = {
  createDreamTeam
};
