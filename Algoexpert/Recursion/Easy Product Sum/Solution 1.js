// O(n) time | O(d) space. d - the greatest depth
function productSum(array, lvl = 1) {
    // Write your code here.
      let sum = 0;
  
      for(let el of array) {
          if(typeof el === "number") {
              sum += el;
          } else {
              sum += productSum(el, lvl + 1)
          }
      }
  
      return sum * lvl;
  }
  
  // Do not edit the line below.
  exports.productSum = productSum;
  