// O(log(n)) time | O(1) space
function binarySearch(array, target) {
    // Write your code here.
      let leftIndex = array[0];
      let rightIndex = array[array.length - 1];
      
      while(leftIndex <= rightIndex) {
          const mediumIndex = Math.floor((leftIndex + rightIndex) / 2);
          
          if(array[mediumIndex] === target) {
              return mediumIndex;
          } else if(array[mediumIndex] < target) {
              leftIndex = mediumIndex + 1;
          } else {
              rightIndex = mediumIndex - 1;
          }
      }
      
      return -1;
  }
  
  // Do not edit the line below.
  exports.binarySearch = binarySearch;
  