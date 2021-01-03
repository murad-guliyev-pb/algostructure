// O(n) time | O(n) space
function getNthFib(n) {
    // Write your code here.
      const cache = {0:0, 1: 0, 2: 1};
      
      const fn = (n) => {
          if(n in cache){
                  return cache[n];
          }
          
          cache[n] = fn(n - 2) + fn(n - 1);
          return cache[n];
      }
      
      return fn(n);
  }
  
  // Do not edit the line below.
  exports.getNthFib = getNthFib;
  