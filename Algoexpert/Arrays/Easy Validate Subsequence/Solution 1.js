// O(n) time | O(1) space
function isValidSubsequence(array, sequence) {
    // Write your code here.
      const arrayLength = array.length;
      const sequenceLength = sequence.length;
      let sequenceIndex = 0;	
      
      if(sequenceLength > arrayLength) return false;
      
      for(let i = 0; i < arrayLength; i++) {
          if(array[i] === sequence[sequenceIndex]) {
              sequenceIndex++;
          }
      }
      
      return sequenceIndex === sequenceLength;
  }
  
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;
  