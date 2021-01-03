// O(n^2) time | O(1) space
function bubbleSort(array) {
    // Write your code here.
      let isSorted = false;
      let lastUnsortedEl = array.length - 1;
      
      while(!isSorted) {
          isSorted = true;
          for(let i = 0; i < lastUnsortedEl ; i++) {
              if(array[i] > array[i+1]) {
                  swap(i, i + 1,array);
                  if(isSorted) isSorted = false;
              }
          }
          lastUnsortedEl--;
      }
      
      return array;
  }
  
  function swap(i, j, array) {
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  
  // Do not edit the line below.
  exports.bubbleSort = bubbleSort;
  