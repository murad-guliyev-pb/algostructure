// O(nlog(n)) time | O(1) space
function twoNumberSum(array, targetSum) {
    // Write your code here.
      let startPointer = 0;
      let endPointer = array.length - 1;
      let sum = 0;
      array.sort((a, b) => a-b);
      
      while(startPointer !== endPointer) {
          sum = array[startPointer] + array[endPointer];
          if(sum === targetSum) {
              return [array[endPointer], array[startPointer]];
          } else if(sum < targetSum) {
              startPointer++;
          } else {
              endPointer--;
          }
      }
      
      return [];
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;
  