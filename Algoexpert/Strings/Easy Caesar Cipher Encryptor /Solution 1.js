// O(n) time | O(n) space
function caesarCipherEncryptor(string, key) {
    // Write your code here.
      const fromZtoA = 26;
      const newKey = (key % fromZtoA);
      
      const arr = string.split('').map(char => {
          let newValue = char.charCodeAt(0) + newKey;
          if(newValue > 122) {
              newValue -= fromZtoA;
          }
          
          return String.fromCharCode(newValue);
      });
      
      return arr.join('');
  }
  
  // Do not edit the line below.
  exports.caesarCipherEncryptor = caesarCipherEncryptor;
  