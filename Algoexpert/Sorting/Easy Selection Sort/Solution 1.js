// O(n^2) time | O(1) space
function selectionSort(array) {
    // Write your code here.
      let minIndex = 0;
      
      for(let i = 0; i < array.length; i++) {
          minIndex = i;
          for(let j = i; j < array.length; j++) {
              if(array[j] < array[minIndex]) {
                  minIndex = j;
              }
          }
          swap(i, minIndex, array);
      }
      
      return array;
  }
  
  function swap(i, j, array) {
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  
  // Do not edit the line below.
  exports.selectionSort = selectionSort;
  