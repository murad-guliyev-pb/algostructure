// O(n) time | O(n) space
function runLengthEncoding(string) {
    // Write your code here.
      const resArray = [];
      let runLength = 1;
      
      for(let i = 1; i < string.length; i++) {
          const currentChar = string[i];
          const prevChar = string[i - 1];
          
          if(currentChar !== prevChar || runLength === 9) {
              resArray.push(runLength);
              resArray.push(prevChar);
              runLength = 0;
          }
          
          runLength++;
      }
      
      resArray.push(runLength);
      resArray.push(string[string.length - 1]);
      
      return resArray.join("");
  }
  
  // Do not edit the line below.
  exports.runLengthEncoding = runLengthEncoding;
  